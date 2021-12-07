import type { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'
import { isOwner } from '../validators'

export const demos = () => {
  return db.demo.findMany()
}

export const demo = ({ id }: Prisma.DemoWhereUniqueInput) => {
  return db.demo.findUnique({
    where: { id },
  })
}

interface CreateDemoArgs {
  input: Prisma.DemoCreateInput
}

export const createDemo = ({ input }: CreateDemoArgs) => {
  return db.demo.create({
    data: input,
  })
}

interface UpdateDemoArgs extends Prisma.DemoWhereUniqueInput {
  input: Prisma.DemoUpdateInput
}

export const updateDemo = async ({ id, input }: UpdateDemoArgs) => {
  await isOwner(id, demo)
  return db.demo.update({
    data: input,
    where: { id },
  })
}

export const deleteDemo = async ({ id }: Prisma.DemoWhereUniqueInput) => {
  await isOwner(id, demo)
  return db.demo.delete({
    where: { id },
  })
}

export const Demo = {
  space: (_obj, { root }: ResolverArgs<ReturnType<typeof demo>>) =>
    db.demo.findUnique({ where: { id: root.id } }).space(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof demo>>) =>
    db.demo.findUnique({ where: { id: root.id } }).user(),
}
