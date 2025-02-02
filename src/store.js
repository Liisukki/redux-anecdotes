import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

// Yhdistä kaikki reducerit
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer // Lisää notificationReducer
})

const store = configureStore({
  reducer
})

export default store
