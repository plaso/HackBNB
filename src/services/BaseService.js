import axios from 'axios'

export const createHttp = () => {
  const http = axios.create({
    baseURL: 'https://ironbnb-m3.herokuapp.com'
  })

  http.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  )

  return http
}