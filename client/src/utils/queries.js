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
      }
      profile {
        skills
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