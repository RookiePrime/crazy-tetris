import { gql } from '@apollo/client';

export const GET_HIGHSCORES = gql`
    query {
        highscores {
            username
            highscore
        }
    }
`;