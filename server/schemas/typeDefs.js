const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    profile: Profile
    savedProjects: [Project]
  }

  type Profile {
    skills: [String],
    portfolio: String
  }

  type Project {
    _id: ID
    title: String
    dueDate: String
    client: String
    checked: Boolean
  }

  type Auth {
    token: ID
    user: User
  }
 
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    savedProjects(title: String, dueDate: String, client: String, checked: Boolean): User
    deleteProjects(projectId: ID!): User
    newUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): Auth
    addSkills(id: ID, skill: String!): User
    updateProject(dueDate: String, client: String, checked: Boolean): User
  }

  type Query {
    getUserByUsername(username: String!): User
    getUserById: User
    getSkills(id: ID): User
    getProjects(id: ID): User
    getUsersBySkills(skills: String): User
    getUserByEmail(email: String!): User
  }
`;


module.exports = typeDefs;