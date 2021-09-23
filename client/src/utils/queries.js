import { gql } from '@apollo/client';

export const QUERY_TOPSCORES = gql`
    query {
        topscores {
            username
            highscore
        }
    }
`;

export const QUERY_HIGHSCORES = gql`
    query highscores($username: String!) {
        highscores(username: $username) {
            highscore
            username
        }
    }
`;