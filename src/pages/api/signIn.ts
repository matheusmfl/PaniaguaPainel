import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../services/prisma'

async function signIn(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const UserValidate = await prisma.corretor.findFirst({
    where: { email },
    select: { name: true, password: true, email: true },
  })

  if (UserValidate.password === password) {
    console.log(UserValidate.name)
    return res.status(200).json(UserValidate)
  } else {
    return res.status(401).send({ message: 'Usuário ou senha não batem!' })
  }
}

export default signIn
