export const schema = gql`
  type Demo {
    id: String!
    space: Space!
    spaceId: String!
    title: String!
    accepting: Boolean!
    createdAt: DateTime!
  }

  type Query {
    demos: [Demo!]! @requireAuth
    demo(id: String!): Demo @requireAuth
  }

  input CreateDemoInput {
    spaceId: String!
    title: String!
    accepting: Boolean!
  }

  input UpdateDemoInput {
    spaceId: String
    title: String
    accepting: Boolean
  }

  type Mutation {
    createDemo(input: CreateDemoInput!): Demo! @requireAuth
    updateDemo(id: String!, input: UpdateDemoInput!): Demo! @requireAuth
    deleteDemo(id: String!): Demo! @requireAuth
  }
`
