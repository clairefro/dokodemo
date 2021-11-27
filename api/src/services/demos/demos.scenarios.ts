import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DemoCreateArgs>({
  demo: {
    one: {
      data: {
        title: 'String',
        url: 'String',
        creator: 'String',
        space: {
          create: {
            title: 'String',
            user: {
              create: {
                email: 'String7237151',
                username: 'String8827095',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String1597376',
            username: 'String992842',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        url: 'String',
        space: {
          create: {
            title: 'String',
            user: {
              create: {
                email: 'String7182568',
                username: 'String8114163',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String1840842',
            username: 'String5005695',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
