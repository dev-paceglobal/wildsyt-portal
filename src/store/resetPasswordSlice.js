// Path: store\products-slice.js
import {createSlice} from '@reduxjs/toolkit'

const initialProductsState = {
  otp: '',
  email: '',
}

const resetPasswordSlice = createSlice({
  name: 'data',
  initialState: initialProductsState,
  reducers: {
    resetPasswordData(state, action) {
      console.log('action', action)
      state.otp = action.payload.otp
      state.email = action.payload.email
    },
  },
})

export const {resetPasswordData} = resetPasswordSlice.actions

export default resetPasswordSlice.reducer
