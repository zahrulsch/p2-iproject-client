import axios from 'axios'

export default axios.create({
  baseURL: 'https://myanime-v1.herokuapp.com',
  timeout: 3000
})
