import type { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'
import { isOwner } from '../validators'

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

export const updateSpace = async ({ id, input }: UpdateSpaceArgs) => {
  await isOwner(id, space)
  return db.space.update({
    data: input,
    where: { id },
  })
}

export const deleteSpace = async ({ id }: Prisma.SpaceWhereUniqueInput) => {
  await isOwner(id, space)
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
