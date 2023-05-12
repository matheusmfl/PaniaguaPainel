import { v4 as uuid } from 'uuid'
import { api } from './api'

interface signInProps {
  email: string
  password: string
}

interface User {
  name: string
  email: string
}

interface UserToken {
  token: string
}

export async function signInRequest(data: signInProps) {
  const response = await api.post('/api/signIn', data)
  const user: User = await response.data

  console.log(user)
  return {
    token: uuid(),
    user: {
      name: user.name,
      email: user.email,
    },
  }
}

export async function recoverUserInformation({ token }: UserToken) {
  const response = await api.post('/api/recoverUserApi', token)
  const data: User = response.data

  return {
    user: {
      name: data.name,
      email: data.email,
      avatar_url: 'https://github.com/matheusmfl.png',
    },
  }
}
