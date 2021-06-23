const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      username: String!
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

  type Project {
      dueDate: String,
      client: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login()
  }

`;

module.exports = typeDefs;