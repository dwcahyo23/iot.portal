import { Button, Paper, PasswordInput, TextInput, Title } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { addNotification } from '@renderer/store'
import useAuth from '@renderer/utils/hooks/useAuth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import classes from './SignIn.module.css'

export default function SignIn() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const { signIn } = useAuth()
  const schema = yup.object().shape({
    nik: yup.string().required('Please enter a nik').min(9).max(9),
    password: yup.string().required('Please enter a password')
  })

  const form = useForm({
    initialValues: {
      nik: '199907058',
      password: '12345qwerty'
    },
    validate: yupResolver(schema)
  })

  async function handleSubmit(values: { nik: string; password: string }) {
    setLoading(true)
    try {
      const res = await signIn(values)
      if (res?.status === 'failed') {
        dispatch(
          addNotification({
            id: (Math.random() + 1).toString(36).substring(7),
            title: 'Login Gagal',
            message: 'Periksa kembali nik atau password',
            color: 'red'
          })
        )
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
              Welcome to IOT Portal
            </Title>
            <TextInput
              {...form.getInputProps('nik')}
              name={'nik'}
              label="Email address"
              withAsterisk
              placeholder="hello@gmail.com"
              size="md"
            />
            <PasswordInput
              {...form.getInputProps('password')}
              name={'password'}
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <Button loading={loading} type={'submit'} fullWidth mt="xl" size="md">
              Login
            </Button>
            {/*<Text ta="center" mt="md">*/}
            {/*  Don&apos;t have an account?{' '}*/}
            {/*  <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>*/}
            {/*    Register*/}
            {/*  </Anchor>*/}
            {/*</Text>*/}
          </Paper>
        </div>
      </form>
    </div>
  )
}
