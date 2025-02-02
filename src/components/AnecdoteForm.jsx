import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(showNotification(`you created '${content}'`))
  }

  return (
    <form onSubmit={addAnecdote}>
      <div>
      <h2>Create new</h2>
        <input 
      name="anecdote" 
      placeholder='Write your anecdote here'/>
      </div>
      <button>Save</button>
    </form>
  )
}

export default AnecdoteForm