import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DemoCreateArgs>({
  demo: {
    one: {
      data: {
        title: 'String',
        url: 'String',
        creator: 'String',
        space: { create: { title: 'String', accepting: true } },
      },
    },
    two: {
      data: {
        title: 'String',
        url: 'String',
        creator: 'String',
        space: { create: { title: 'String', accepting: true } },
      },
    },
  },
})

export type StandardScenario = typeof standard
