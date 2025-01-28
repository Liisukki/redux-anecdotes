import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const App = () => {
  const [newAnecdote, setNewAnecdote] = useState('') // Reactin tila syötteen hallintaan
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }

  const createAnecdote = (event) => {
    event.preventDefault()
    dispatch({
      type: 'CREATE',
      payload: { content: newAnecdote }
    })
    setNewAnecdote('') // Tyhjennetään syötekenttä
  }

  // Järjestä anekdootit äänien mukaan laskevaan järjestykseen
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input 
            value={newAnecdote} 
            onChange={(e) => setNewAnecdote(e.target.value)} 
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
