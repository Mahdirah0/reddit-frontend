import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      message
      user {
        name
      }
      error {
        field
        message
      }
    }
  }
`;
