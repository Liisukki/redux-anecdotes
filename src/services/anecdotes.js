import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

// Hakee kaikki anekdootit
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// Luo uuden anekdootin backendille
const createNew = async (content) => {
  const object = { content, votes: 0 } // votes pitää olla mukana, koska se on backendin tietokannan kenttä
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default { getAll, createNew }
