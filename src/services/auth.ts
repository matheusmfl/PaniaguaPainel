interface signInProps {
  email: string
  password: string
}

const delay = (amount = 750) => new Promise(resolve=> setTimeout(resolve, amount))

export async function signInRequest(){
 await delay()
}