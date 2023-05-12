import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../services/prisma'
import { randomUUID } from 'crypto'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const corretores = await prisma.corretor.findMany()

    return res.status(200).json(corretores)
  }

  if (req.method === 'POST') {
    const { name, email, password } = req.body

    const newCorretor = await prisma.corretor
      .create({
        data: {
          name,
          email,
          password,
          id: randomUUID(),
        },
      })
      .catch((e) => {
        return res.send({ message: 'Erro na criação de novo corretor' + e })
      })

    return res.status(200).json(newCorretor)
  }
}

export default handler
