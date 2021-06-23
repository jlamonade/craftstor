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
      _id: ID
      skills: String!
      portfolio: String!
      projects: [Project]
    }

  type Project {
      _id: ID
      dueDate: String,
      client: String!
  }
  
  input ProjectInput{
    dueDate: String!
    client: String!
  }

  type Auth {
    token: ID
    user: User
  }
 
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    savedProjects(project: ProjectInput): User
    deleteProjects(projectId: ID!): Project
    newUser(username: String!, email: String!, password: String!): Auth
  }

  type Query {
    getUserByUsername(username: String!): User
    getUserById(id: ID!): User
  }
`;


module.exports = typeDefs;