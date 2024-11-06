import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      variant="outline"
      title="Toggle color scheme"
    >
      {isDark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  )
}
