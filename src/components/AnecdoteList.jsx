import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter
      ? anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  })

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {anecdotes
        .slice() // Luo kopio, jotta sort ei muokkaa alkuperäistä taulukkoa
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>Vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
