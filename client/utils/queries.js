import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_HIGHSCORE = gql`
  query highscores($username: String!) {
    highscores(username: $username) {
      _id
      username
      highscore
    }
  }
`;
