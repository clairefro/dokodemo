import {
  users,
  privateUser,
  publicUser,
  createUser,
  updateUser,
  deleteUser,
} from './users'
import type { StandardScenario } from './users.scenarios'

describe.only('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario(
    'privateUser returns a private user',
    async (scenario: StandardScenario) => {
      const result = await privateUser({ id: scenario.user.one.id })

      expect(result.id).toEqual(scenario.user.one.id)
      expect(result.username).toEqual(scenario.user.one.username)
      expect(result.email).toEqual(scenario.user.one.email)
    }
  )

  scenario(
    'publicUser returns a public user',
    async (scenario: StandardScenario) => {
      const result = await publicUser({ id: scenario.user.one.id })

      expect(result.id).toEqual(scenario.user.one.id)
      expect(result.username).toEqual(scenario.user.one.username)
    }
  )

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String2902431',
        username: 'String1439737',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.email).toEqual('String2902431')
    expect(result.username).toEqual('String1439737')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await privateUser({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { email: 'String22462222' },
    })

    expect(result.email).toEqual('String22462222')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await privateUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
