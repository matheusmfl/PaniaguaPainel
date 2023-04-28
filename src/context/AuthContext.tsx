import { createContext } from 'react'
import { signInRequest } from '../services/auth'
import { setCookie } from 'nookies'

type AuthContextType = {
  isAuthenticated: boolean
}

interface signInData {
  email: string
  password: string
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const isAuthenticated = false

  async function SignIn({ email, password }: signInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'token')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
