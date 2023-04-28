import { v4 as uuid } from 'uuid'

interface signInProps {
  email: string
  password: string
}

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export async function signInRequest(data: signInProps) {
  await delay()
  return {
    token: uuid,
    user: {
      name: 'Matheus Fonteles',
      email: 'matheusfonteles@hotmail.com',
      avatar_url: 'https://github.com/matheusmfl.png',
    },
  }
}
