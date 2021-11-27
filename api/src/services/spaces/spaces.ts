import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const spaces = () => {
  return db.space.findMany()
}

export const space = ({ id }: Prisma.SpaceWhereUniqueInput) => {
  return db.space.findUnique({
    where: { id },
  })
}

interface CreateSpaceArgs {
  input: Prisma.SpaceCreateInput
}

export const createSpace = ({ input }: CreateSpaceArgs) => {
  return db.space.create({
    data: input,
  })
}

interface UpdateSpaceArgs extends Prisma.SpaceWhereUniqueInput {
  input: Prisma.SpaceUpdateInput
}

export const updateSpace = ({ id, input }: UpdateSpaceArgs) => {
  return db.space.update({
    data: input,
    where: { id },
  })
}

export const deleteSpace = ({ id }: Prisma.SpaceWhereUniqueInput) => {
  return db.space.delete({
    where: { id },
  })
}

export const Space = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof space>>) =>
    db.space.findUnique({ where: { id: root.id } }).user(),
  demos: (_obj, { root }: ResolverArgs<ReturnType<typeof space>>) =>
    db.space.findUnique({ where: { id: root.id } }).demos(),
}
