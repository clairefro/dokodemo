import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SpaceCreateArgs>({
  space: {
    one: {
      data: {
        title: 'String',
        user: {
          create: {
            email: 'String8338582',
            username: 'String9346247',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        user: {
          create: {
            email: 'String7961023',
            username: 'String7632224',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
