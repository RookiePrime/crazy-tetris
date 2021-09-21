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

export const QUERY_TOPSCORES = gql`
  query {
    topscores {
      username
      highscore
    }
  }
`;

export const QUERY_HIGHSCORE = gql`
  query highscore($username: String!) {
    highscore(username: $username) {
      _id
      username
      highscore
    }
  }
`;
