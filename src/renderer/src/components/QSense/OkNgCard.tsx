import { Button, Card, Group, Indicator, Text, Textarea } from '@mantine/core'
import React, { useState } from 'react'

interface OkNgCardProps {
  machineCode: string
  machineName: string
  topic: string
  online: boolean
  onOkClick: (topic: string, message: string) => void // Menambahkan machineCode ke parameter
  onNgClick: (topic: string, message: string) => void // Menambahkan machineCode ke parameter
}

const OkNgCard: React.FC<OkNgCardProps> = ({
  machineCode,
  machineName,
  topic,
  online,
  onOkClick,
  onNgClick
}) => {
  const [message, setMessage] = useState('')

  return (
    <Indicator color={online ? 'green' : 'red'} size={20} offset={12} processing withBorder>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs" mb="md">
          <Text fw={500} size="lg">
            Kode Mesin: {machineCode}
          </Text>
        </Card.Section>

        <Text color="dimmed" size="sm">
          Nama Mesin: {machineName}
        </Text>

        <Textarea
          placeholder="Masukkan pesan"
          label="Pesan"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          disabled={!online}
          minRows={4}
          maxLength={128}
        />

        <Group justify="apart" mt="md">
          <Button color="green" onClick={() => onOkClick(topic, message)} disabled={!online}>
            OK
          </Button>
          <Button color="red" onClick={() => onNgClick(topic, message)} disabled={!online}>
            NG
          </Button>
        </Group>
      </Card>
    </Indicator>
  )
}

export default OkNgCard
