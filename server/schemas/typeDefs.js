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

  type Project {
      dueDate: Date,
      client: String!
  }

  type Auth {
    token: ID
    user: User
  }
 
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createUser (input: savedUsed): User
    removeProjects(projectId: String!): Projects
}


`;


module.exports = typeDefs;