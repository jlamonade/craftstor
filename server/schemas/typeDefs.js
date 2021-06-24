const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type UserName {
      _id: ID
      usernName: String!
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

  type Profile {
      _id: ID
      dueDate: String,
      client: String!
  }
  
  input ProjectInput{
    dueDate: String!
    client: String!
  }
 firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8


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