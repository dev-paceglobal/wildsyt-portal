import {configureStore} from '@reduxjs/toolkit'
import resetPasswordReducer from './resetPasswordSlice'
import userDataReducer from './userSlice'

const store = configureStore({
  reducer: {
    resetData: resetPasswordReducer,
    user: userDataReducer,
  },
})

export default store
