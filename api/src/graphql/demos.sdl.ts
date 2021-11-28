export const schema = gql`
  type Demo {
    id: String!
    spaceId: String!
    user: PublicUser!
    userId: String!
    title: String!
    url: String!
    createdAt: DateTime!
  }

  type Query {
    demos: [Demo!]! @requireAuth
    demo(id: String!): Demo @requireAuth
  }

  input CreateDemoInput {
    spaceId: String!
    userId: String!
    title: String!
    url: String!
  }

  input UpdateDemoInput {
    spaceId: String
    userId: String
    title: String
    url: String
  }

  type Mutation {
    createDemo(input: CreateDemoInput!): Demo! @requireAuth
    updateDemo(id: String!, input: UpdateDemoInput!): Demo! @requireAuth
    deleteDemo(id: String!): Demo! @requireAuth
  }
`
