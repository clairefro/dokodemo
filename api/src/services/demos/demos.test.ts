import { AuthenticationError } from '@redwoodjs/graphql-server'
import { DAVID_DEETS, ROB_DEETS } from '../_testUtils/constants'
import { demos, demo, createDemo, updateDemo, deleteDemo } from './demos'
import type { StandardScenario } from './demos.scenarios'

describe('demos', () => {
  scenario('returns all demos', async (scenario: StandardScenario) => {
    const result = await demos()

    expect(result.length).toEqual(Object.keys(scenario.demo).length)
  })

  scenario('returns a single demo', async (scenario: StandardScenario) => {
    const result = await demo({ id: scenario.demo.one.id })

    expect(result).toEqual(scenario.demo.one)
  })

  scenario('creates a demo', async (scenario: StandardScenario) => {
    const result = await createDemo({
      input: {
        spaceId: scenario.demo.one.spaceId,
        userId: scenario.demo.one.userId,
        title: 'String',
        url: 'String',
      },
    })

    expect(result.spaceId).toEqual(scenario.demo.one.spaceId)
    expect(result.userId).toEqual(scenario.demo.one.userId)
    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a demo if owner', async (scenario: StandardScenario) => {
    mockCurrentUser({ ...ROB_DEETS, id: scenario.demo.one.userId })
    const original = await demo({ id: scenario.demo.one.id })
    const result = await updateDemo({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  // scenario('only owner can update', async (scenario: StandardScenario) => {
  //   mockCurrentUser({ ...ROB_DEETS, id: scenario.demo.one.userId })
  //   const original = await createDemo({
  //     input: {
  //       spaceId: scenario.demo.one.spaceId,
  //       userId: scenario.demo.one.userId,
  //       title: 'String',
  //       url: 'String',
  //     },
  //   })
  //   console.log({ original })
  //   mockCurrentUser({ ...DAVID_DEETS, id: scenario.demo.two.userId })
  //   const action = async () => {
  //     await updateDemo({
  //       id: original.id,
  //       input: { title: 'String2' },
  //     })
  //   }
  //   expect(action()).rejects.toThrow(AuthenticationError)
  // })

  scenario('deletes a demo if owner', async (scenario: StandardScenario) => {
    mockCurrentUser({ ...ROB_DEETS, id: scenario.demo.one.userId })
    const original = await deleteDemo({ id: scenario.demo.one.id })
    const result = await demo({ id: original.id })

    expect(result).toEqual(null)
  })

  // scenario(
  //   'only owner can delete a demo',
  //   async (scenario: StandardScenario) => {
  //     mockCurrentUser({ ...ROB_DEETS, id: scenario.demo.one.userId })
  //     const original = await createDemo({
  //       input: {
  //         spaceId: scenario.demo.one.spaceId,
  //         userId: scenario.demo.one.userId,
  //         title: 'String',
  //         url: 'String',
  //       },
  //     })
  //     mockCurrentUser({ ...DAVID_DEETS, id: scenario.demo.two.userId })
  //     const action = async () => {
  //       await deleteDemo({
  //         id: original.id,
  //       })
  //     }
  //     expect(action()).rejects.toThrow(AuthenticationError)
  //   }
  // )
})
