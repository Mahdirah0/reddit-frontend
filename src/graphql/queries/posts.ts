import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      description
    }
  }
`;

// export const GET_POST = gql`
//   query {
//
//   }
// `;
