export const schema = gql`
  type Space {
    id: String!
    title: String!
    accepting: Boolean!
    demos: [Demo]!
    createdAt: DateTime!
  }

  type Query {
    spaces: [Space!]! @skipAuth
    space(id: String!): Space @skipAuth
  }

  input CreateSpaceInput {
    title: String!
  }

  input UpdateSpaceInput {
    title: String
    accepting: Boolean
  }

  type Mutation {
    createSpace(input: CreateSpaceInput!): Space! @skipAuth
    updateSpace(id: String!, input: UpdateSpaceInput!): Space! @skipAuth
    deleteSpace(id: String!): Space! @skipAuth
  }
`
