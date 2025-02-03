import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    addAnecdote(state, action) {
      state.push(action.payload);
    },
    updateAnecdote(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      );
    },
  },
});

export const { setAnecdotes, addAnecdote, updateAnecdote } =
  anecdoteSlice.actions;

// Haetaan anekdootit backendistä sovelluksen käynnistyessä
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

// Luodaan uusi anekdootti backendissä ja lisätään Redux-tilaan
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(addAnecdote(newAnecdote));
  };
};

// Äänestetään anekdoottia ja päivitetään Redux-tila
export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdoteToVote = getState().anecdotes.find((a) => a.id === id);
    const updatedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    };

    const savedAnecdote = await anecdotesService.updateVotes(
      id,
      updatedAnecdote
    );
    dispatch(updateAnecdote(savedAnecdote));
  };
};

export default anecdoteSlice.reducer;
