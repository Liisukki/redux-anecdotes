import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (content.trim() === '') return // Estetään tyhjän anekdootin lisääminen

    dispatch(createAnecdote(content)) // Lähetetään anekdootti Reduxiin ja backendille
    setContent('') // Tyhjennetään kenttä lomakkeen lähettämisen jälkeen
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
