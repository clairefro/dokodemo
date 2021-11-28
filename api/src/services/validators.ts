import { Demo, Space } from '.prisma/client'
import { AuthenticationError } from '@redwoodjs/graphql-server'
import { context } from '@redwoodjs/graphql-server'

type AcceptableModel = Demo | Space

export const isOwner = async (
  id: string,
  getter: ({ id: string }) => Promise<AcceptableModel>
) => {
  const model = await getter({ id })
  if (model.userId !== context.currentUser.id) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
