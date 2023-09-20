import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const forgotPasswordSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
})
export const resetPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must Contain 4 characters long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('New Password is required'),
})
