import axios from 'axios'

export const createHttp = () => axios.create({
  baseURL: 'https://ironbnb-m3.herokuapp.com'
})