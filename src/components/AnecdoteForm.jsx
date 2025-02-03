import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (content.trim() === '') return

    dispatch(createAnecdote(content))
    dispatch(showNotification(`You created '${content}'`, 5)) // Näytetään notifikaatio 5s
    setContent('')
  }

  return (
    <div>
      <h2>Create New Anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your anecdote here..."
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
