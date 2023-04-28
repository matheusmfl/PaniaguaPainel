import { setCookie, parseCookies } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { recoverUserInformation, signInRequest } from '../services/auth'
import Router from 'next/router'
import { api } from '../services/api'

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

  useEffect(() => {
    const { 'token@paniagua': token } = parseCookies()

    if (token) {
      recoverUserInformation().then((response) => setUser(response.user))
    }
  }, [])

  async function signIn({ email, password }: signInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'token@paniagua', token, {
      maxAge: 60 * 60 * 24 * 7,
    })

    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)
    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
