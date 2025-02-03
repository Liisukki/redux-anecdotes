import { createSlice } from '@reduxjs/toolkit'

const initialState = { message: '', timeoutId: null }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId) // Poistetaan edellinen aikakatkaisu
      }
      return action.payload
    },
    clearNotification() {
      return { message: '', timeoutId: null }
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

// Action creator, joka asettaa ja poistaa notifikaation annetun ajan kuluttua
export const showNotification = (message, duration = 5000) => {
  return (dispatch, getState) => {
    const { timeoutId } = getState().notification
    if (timeoutId) {
      clearTimeout(timeoutId) // Poistetaan edellinen aikakatkaisu, jos sellainen on
    }

    const newTimeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, duration * 1000)

    dispatch(setNotification({ message, timeoutId: newTimeoutId }))
  }
}

export default notificationSlice.reducer
