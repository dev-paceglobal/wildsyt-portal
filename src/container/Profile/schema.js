import * as yup from 'yup'

export const editProfileSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
})
export const editPasswordSchema = yup.object({
  oldPassword: yup.string().required('Old password is required'),
  newPassword: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must Contain 4 characters long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('New Password is required'),
})
