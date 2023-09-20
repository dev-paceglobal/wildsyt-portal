// Path: store\products-slice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'

const initalUserState = {
  user: {},
  loading: false,
}

export const getProfile = createAsyncThunk('getProfile', async () => {
  const x = apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.profile}`,
    (res) => {
      return res
    },
    (err) => {
      return err
    }
  )
  return await x
})

export const userDataSlice = createSlice({
  name: 'user',
  initialState: initalUserState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload.user
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload.data
      state.loading = false
    })
  },
})

export const {setUserData} = userDataSlice.actions

export default userDataSlice.reducer
