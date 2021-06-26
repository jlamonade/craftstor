import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query {
    getUserById {
      _id
      username
      firstName
      lastName
      email
      savedProjects {
        client
        dueDate
        title
        _id
      }
      profile {
        skills
        portfolio
      }
    }
  }
`

export const GET_USER_BY_USERNAME = gql`
  query ($username: String!) {
    getUserByUsername(username: $username) {
      _id
      username
      firstName
      lastName
      email
      savedProjects {
        client
        dueDate
        title
        _id
      }
      profile {
        skills
        portfolio
      }
    }
  }
`

export const GET_SKILLS = gql`
  query {
    getSkills {
      profile {
        skills
      }
    }
  }
`