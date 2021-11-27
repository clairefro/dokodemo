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
        spaceId: scenario.demo.two.spaceId,
        userId: scenario.demo.two.userId,
        title: 'String',
        url: 'String',
      },
    })

    expect(result.spaceId).toEqual(scenario.demo.two.spaceId)
    expect(result.userId).toEqual(scenario.demo.two.userId)
    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a demo', async (scenario: StandardScenario) => {
    const original = await demo({ id: scenario.demo.one.id })
    const result = await updateDemo({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a demo', async (scenario: StandardScenario) => {
    const original = await deleteDemo({ id: scenario.demo.one.id })
    const result = await demo({ id: original.id })

    expect(result).toEqual(null)
  })
})
