import type { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

export const watchedDemosByUserId = ({
  id,
}: Prisma.WatchedDemoWhereUniqueInput) => {
  return db.watchedDemo.findMany({ where: { userId: id } })
}

export const watchedDemo = ({ id }: Prisma.WatchedDemoWhereUniqueInput) => {
  return db.demo.findUnique({
    where: { id },
  })
}

export const watchedDemosByDemoId = ({
  id,
}: Prisma.WatchedDemoWhereUniqueInput) => {
  return db.watchedDemo.findMany({ where: { demoId: id } })
}

export const markDemoWatched = async ({
  demoId,
  userId,
}: Prisma.WatchedDemoUncheckedCreateInput) => {
  return db.watchedDemo.create({
    data: { userId, demoId },
  })
}

export const WatchedDemo = {
  demo: (_obj, { root }: ResolverArgs<ReturnType<typeof watchedDemo>>) =>
    db.watchedDemo.findUnique({ where: { id: root.id } }).demo(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof watchedDemo>>) =>
    db.watchedDemo.findUnique({ where: { id: root.id } }).user(),
}
