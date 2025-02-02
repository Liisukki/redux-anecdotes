import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

// Hakee kaikki anekdootit
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// Luo uuden anekdootin
const createNew = async (content) => {
  const object = { content, votes: 0 } // Huomaa että 'votes' kenttä pitää olla mukana
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default { getAll, createNew }
