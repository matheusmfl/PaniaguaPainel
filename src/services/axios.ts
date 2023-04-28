import axios from 'axios'
import { parseCookies } from 'nookies'

export function getApiClient(ctx?: any) {
  const { 'token@paniagua': token } = parseCookies(ctx)
  const api = axios.create({
    baseURL: 'http://localhost:3333',
  })

  api.interceptors.request.use((config) => {
    console.log(config)

    return config
  })

  if (token) {
    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }
}
