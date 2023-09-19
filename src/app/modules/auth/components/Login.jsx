/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import {useAuth} from '../core/Auth'
import UITextField from '../../../../components/UITextField/UITextField'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {loginSchema} from '../schema'
import {Grid} from '@mui/material'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UIButton from '../../../../components/UIButton/UIButton'

export function Login() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: loginSchema,
  //   onSubmit: async (values, {setStatus, setSubmitting}) => {
  //     setLoading(true)
  //     try {
  //       const {data: auth} = await login(values.email, values.password)
  //       saveAuth(auth)
  //       const {data: user} = await getUserByToken(auth.api_token)
  //       setCurrentUser(user)
  //     } catch (error) {
  //       console.error(error)
  //       saveAuth(undefined)
  //       setStatus('The login details are incorrect')
  //       setSubmitting(false)
  //       setLoading(false)
  //     }
  //   },
  // })

  const handleLogin = (data) => {
    console.log('data', data)
  }

  return (
    <>
      <Grid container pb={2}>
        <Grid item xs={12}>
          <UITypogrpahy type='heading' title='Login' textAlign='center' />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UITextField
              type='email'
              variant='outlined'
              fullWidth
              control={control}
              errorMessage={errors.email?.message}
              name='email'
              label='Email'
            />
          </Grid>
          <Grid item xs={12}>
            <UITextField
              type='password'
              variant='outlined'
              fullWidth
              control={control}
              errorMessage={errors.password?.message}
              name='password'
              label='Password'
            />
          </Grid>
          <Grid item xs={12}>
            <UIButton btnType='contained' fullWidth label='Sign In' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}
