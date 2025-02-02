import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const { id } = action.payload
      const anecdote = state.find(a => a.id === id)
      anecdote.votes += 1
    }
  }
})

export const { setAnecdotes, addAnecdote, voteAnecdote } = anecdoteSlice.actions

// Fetchataan anekdootit JSON Serveriltä sovelluksen käynnistyksessä
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

// Lähetetään uusi anekdootti JSON Serverille ja lisätään se Redux-tilaan
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer
