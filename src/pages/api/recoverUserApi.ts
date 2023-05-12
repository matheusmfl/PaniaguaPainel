import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../services/prisma'

export async function recoverUserApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { token } = req.body

  const recoveredData = prisma.corretor.findFirst({
    where: { token },
  })

  if (recoveredData) {
    return res.status(200).json(recoveredData)
  } else return res.status(300).send({ message: 'Token não encontrado' })
}
