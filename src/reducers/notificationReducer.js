import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

// createSlice-API notifikaation hallintaan
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

// Notifikaatio asetaan ja poistetaan viiden sekunnin kuluttua
export const showNotification = (message, timeout = 5000) => {
  return async (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  }
}

export default notificationSlice.reducer
