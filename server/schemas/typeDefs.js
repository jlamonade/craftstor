const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      firstName: String!
      lastName: String!
      email: String!
      profile: Profile
    }

  type Profile {
      skills: String!
      portfolio: String!
      projects: [Project]
    }
`