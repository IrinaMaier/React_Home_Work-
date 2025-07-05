import { createSlice } from '@reduxjs/toolkit'

const savedUser = JSON.parse(localStorage.getItem('registeredUser'))

const initialState = {
  users: [],
  registeredUser: savedUser || null,
  isAuthenticated: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.registeredUser = action.payload
      localStorage.setItem('registeredUser', JSON.stringify(action.payload))
      state.error = null
    },
    login: (state, action) => {
      const { email, password } = action.payload

      if (
        state.registeredUser &&
        state.registeredUser.email === email &&
        state.registeredUser.password === password
      ) {
        state.isAuthenticated = true
        state.error = null
      } else {
        state.isAuthenticated = false
        state.error = 'Не правильный логин или пароль'
      }
    },
    logOut: (state) => {
      state.isAuthenticated = false
      state.error = null
    },
  },
})

export default authSlice.reducer
export const { logOut, login, register } = authSlice.actions
