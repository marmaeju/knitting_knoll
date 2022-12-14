import Axios from 'axios'

export const BASE_URL = 'https://knitting-knoll-backend.herokuapp.com/'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
