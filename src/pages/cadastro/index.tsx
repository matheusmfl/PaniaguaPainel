import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Home() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  async function createUser(data) {
    await fetch('/api/corretor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    router.push('/')
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Página de cadastro de corretor</title>
        </Head>

        <div className="max-w-sm w-full space-y-8">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              height={12}
              width={12}
            />

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Crie sua conta no nosso sistema
            </h2>
          </div>
          <form
            className="mt-8 space-y-6 flex flex-col"
            onSubmit={handleSubmit((data) => {
              createUser(data)
            })}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="pt-4">
                <label htmlFor="name-corretor" className="sr-only">
                  Nome completo
                </label>
                <input
                  id="name-corretor"
                  {...register('name')}
                  type="text"
                  required
                  className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Digite seu nome e sobrenome..."
                />
              </div>

              <div className="pt-4">
                <label htmlFor="name-corretor" className="sr-only">
                  Digite seu e-mail
                </label>
                <input
                  id="name-corretor"
                  {...register('email')}
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="pt-4">
                <label htmlFor="password" className="sr-only">
                  sua Senha
                </label>
                <input
                  id="password"
                  {...register('password')}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Digite sua senha..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
