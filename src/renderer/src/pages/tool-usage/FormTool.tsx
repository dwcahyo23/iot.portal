import { Box, Button, Group, Select, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import * as Yup from 'yup'
import { ToolUsage } from './TableTools'

interface FormToolProps {
  tool: ToolUsage | null
  onSave: (
    tool: Omit<ToolUsage, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>
  ) => void
}

// Define the validation schema using Yup
const schema = Yup.object().shape({
  toolName: Yup.string().required('Tool Name is required'),
  usageCount: Yup.number()
    .required('Usage Count is required')
    .min(0, 'Usage Count must be at least 0'),
  usageLimit: Yup.number()
    .required('Usage Limit is required')
    .min(1, 'Usage Limit must be at least 1'),
  mstMchId: Yup.string().required('Machine ID is required'),
  mstMchComId: Yup.string().required('Machine Component ID is required'),
  isLock: Yup.boolean().required('Lock status is required')
})

export const FormTool: React.FC<FormToolProps> = ({ tool, onSave }) => {
  // Initialize form with Mantine's useForm hook and Yup schema

  const form = useForm({
    initialValues: {
      toolName: tool?.toolName || '',
      usageCount: tool?.usageCount || 0,
      usageLimit: tool?.usageLimit || 1000,
      mstMchId: tool?.mstMchId || '',
      mstMchComId: tool?.mstMchComId || '01',
      isLock: tool?.isLock || false
    },
    validate: yupResolver(schema)
  })

  const handleSubmit = (values: typeof form.values) => {
    onSave({
      ...values,
      usageLimit: Number(values.usageLimit),
      usageCount: Number(values.usageCount),
      isLock: values.isLock
    })
  }

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="Tool Name" {...form.getInputProps('toolName')} required mb="sm" />
      <TextInput
        label="Usage Count"
        type="number"
        {...form.getInputProps('usageCount')}
        required
        mb="sm"
      />
      <TextInput
        label="Usage Limit"
        type="number"
        {...form.getInputProps('usageLimit')}
        required
        mb="sm"
      />
      <TextInput label="Machine ID" {...form.getInputProps('mstMchId')} required mb="sm" />

      <Select
        label="Com"
        data={[
          { value: '01', label: 'GM1' },
          { value: '02', label: 'GM2' },
          { value: '03', label: 'GM3' },
          { value: '05', label: 'GM5' }
        ]}
        onChange={(value) => form.setFieldValue('mstMchComId', value ?? '01')} // Ensure value is a string
        value={form.values.mstMchComId} // Ensure it is always a string
        required
        mb="sm"
      />

      <Select
        label="Lock Status"
        data={[
          { value: 'true', label: 'Locked' },
          { value: 'false', label: 'Unlocked' }
        ]}
        onChange={(value) => form.setFieldValue('isLock', value === 'true')}
        value={form.values.isLock ? 'true' : 'false'} // Always pass a string
        required
        mb="sm"
      />
      <Group mt="md">
        <Button type="submit">{tool ? 'Save' : 'Add'}</Button>
      </Group>
    </Box>
  )
}
