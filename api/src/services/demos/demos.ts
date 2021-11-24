import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

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

export const updateDemo = ({ id, input }: UpdateDemoArgs) => {
  return db.demo.update({
    data: input,
    where: { id },
  })
}

export const deleteDemo = ({ id }: Prisma.DemoWhereUniqueInput) => {
  return db.demo.delete({
    where: { id },
  })
}

export const Demo = {
  space: (_obj, { root }: ResolverArgs<ReturnType<typeof demo>>) =>
    db.demo.findUnique({ where: { id: root.id } }).space(),
}
