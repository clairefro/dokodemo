export const schema = gql`
  type Demo {
    id: String!
    space: Space!
    spaceId: String!
    title: String!
    url: String!
    creator: String!
    createdAt: DateTime!
  }

  type Query {
    demos: [Demo!]! @skipAuth
    demo(id: String!): Demo @skipAuth
  }

  input CreateDemoInput {
    spaceId: String!
    title: String!
    url: String!
    creator: String!
  }

  input UpdateDemoInput {
    spaceId: String
    title: String
    url: String
    creator: String
  }

  type Mutation {
    createDemo(input: CreateDemoInput!): Demo! @skipAuth
    updateDemo(id: String!, input: UpdateDemoInput!): Demo! @skipAuth
    deleteDemo(id: String!): Demo! @skipAuth
  }
`
