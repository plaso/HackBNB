import { createHttp } from './BaseService.js';

const http = createHttp()

export const listApartments = () => http.get('/apartments')

export const getApartment = (id) => http.get(`/apartments/${id}`)