export const schema = gql`
  type Space {
    id: String!
    user: User!
    userId: String!
    title: String!
    accepting: Boolean!
    demos: [Demo]!
    createdAt: DateTime!
  }

  type Query {
    spaces: [Space!]! @requireAuth
    space(id: String!): Space @requireAuth
  }

  input CreateSpaceInput {
    userId: String!
    title: String!
    accepting: Boolean
  }

  input UpdateSpaceInput {
    userId: String
    title: String
    accepting: Boolean
  }

  type Mutation {
    createSpace(input: CreateSpaceInput!): Space! @requireAuth
    updateSpace(id: String!, input: UpdateSpaceInput!): Space! @requireAuth
    deleteSpace(id: String!): Space! @requireAuth
  }
`
