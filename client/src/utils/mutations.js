import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation (
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PROJECT = gql`
  mutation (
    $title: String
    $dueDate: String
    $client: String
    $checked: Boolean
  ) {
    savedProjects(
      title: $title
      dueDate: $dueDate
      client: $client
      checked: $checked
    ) {
      username
      savedProjects {
        title
        client
        checked
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation ($skill: String!, $id: ID) {
    addSkills(skill: $skill, id: $id) {
      profile {
        skills
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation (
    $username: String
    $firstName: String
    $lastName: String
    $email: String
  ) {
    updateUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      username
      firstName
      lastName
      email
      _id
    }
  }
`;
