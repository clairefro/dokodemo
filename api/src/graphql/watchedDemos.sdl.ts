export const schema = gql`
  type WatchedDemo {
    id: String!
    userId: String!
    user: PublicUser!
    demoId: String!
    demo: Demo!
  }

  type Query {
    watchedDemosByDemoId(id: String!): [WatchedDemo!]! @requireAuth
    watchedDemosByUserId(id: String!): [WatchedDemo!]! @requireAuth
    watchedDemo(id: String!): WatchedDemo @requireAuth
  }

  input MarkDemoWatchedInput {
    demoId: String!
    userId: String!
  }

  type Mutation {
    markDemoWatched(demoId: String!, userId: String!): Boolean! @requireAuth
  }
`
