import { createContext, useState } from 'react'
import { signInRequest } from '../services/auth'
import { setCookie } from 'nookies'
import Router from 'next/router'

type User = {
  name: string
  email: string
  avatar_url: string
}

interface signInData {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: signInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  async function signIn({ email, password }: signInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'token@paniagua', token, {
      maxAge: 60 * 60 * 24 * 7,
    })

    setUser(user)
    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
