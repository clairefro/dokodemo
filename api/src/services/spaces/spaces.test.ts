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
      input: { userId: scenario.space.two.userId, title: 'String' },
    })

    expect(result.userId).toEqual(scenario.space.two.userId)
    expect(result.title).toEqual('String')
  })

  scenario('updates a space', async (scenario: StandardScenario) => {
    const original = await space({ id: scenario.space.one.id })
    const result = await updateSpace({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a space', async (scenario: StandardScenario) => {
    const original = await deleteSpace({ id: scenario.space.one.id })
    const result = await space({ id: original.id })

    expect(result).toEqual(null)
  })
})
