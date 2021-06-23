import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  type query($id: ID!) {
    getUserById(id: $id) {
      _id
      username
      firstName
      lastName
      email
      savedProjects {
        dueDate
        client
      }
      profile {
        skills
        portfolio
        projects {
          dueDate
          client
        }
      }
    }
  }
`