export const schema = gql`
  type User {
    id: String!
    email: String!
    username: String!
    spaces: [Space]!
    demos: [Demo]!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type PublicUser {
    id: String!
    username: String!
  }

  type PrivateUser {
    id: String!
    email: String!
    username: String!
  }

  type Query {
    users: [PublicUser!]! @requireAuth
    publicUser(id: String!): PublicUser @requireAuth
    privateUser(id: String!): PrivateUser @requireAuth
  }

  input CreateUserInput {
    email: String!
    username: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    username: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
