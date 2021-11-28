import { AuthenticationError } from '@redwoodjs/graphql-server'
import { DAVID_DEETS, ROB_DEETS } from '../_testUtils/constants'
import { spaces, space, createSpace, updateSpace, deleteSpace } from './spaces'
import type { StandardScenario } from './spaces.scenarios'

describe('spaces', () => {
  scenario('returns all spaces', async (scenario: StandardScenario) => {
    const result = await spaces()

    expect(result.length).toEqual(Object.keys(scenario.space).length)
  })

  scenario('returns a single space', async (scenario: StandardScenario) => {
    const result = await space({ id: scenario.space.one.id })

    expect(result).toEqual(scenario.space.one)
  })

  scenario('creates a space', async (scenario: StandardScenario) => {
    const result = await createSpace({
      input: {
        userId: scenario.space.one.userId,
        title: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.space.one.userId)
    expect(result.title).toEqual('String')
  })

  scenario('updates a space if owner', async (scenario: StandardScenario) => {
    mockCurrentUser({ ...ROB_DEETS, id: scenario.space.one.userId })
    const original = await space({ id: scenario.space.one.id })
    const result = await updateSpace({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('only owner can update', async (scenario: StandardScenario) => {
    mockCurrentUser({ ...DAVID_DEETS, id: scenario.space.two.userId })
    const original = await space({ id: scenario.space.one.id })
    const action = async () => {
      await updateSpace({
        id: original.id,
        input: { title: 'String2' },
      })
    }
    expect(action()).rejects.toThrow(AuthenticationError)
  })

  scenario('deletes a space if owner', async (scenario: StandardScenario) => {
    mockCurrentUser({ ...ROB_DEETS, id: scenario.space.one.userId })
    const original = await deleteSpace({ id: scenario.space.one.id })
    const result = await space({ id: original.id })

    expect(result).toEqual(null)
  })

  scenario(
    'only owner can delete a space',
    async (scenario: StandardScenario) => {
      mockCurrentUser({ ...DAVID_DEETS, id: scenario.space.two.userId })
      const original = await space({ id: scenario.space.one.id })
      const action = async () => {
        await updateSpace({
          id: original.id,
          input: { title: 'String2' },
        })
      }
      expect(action()).rejects.toThrow(AuthenticationError)
    }
  )
})
