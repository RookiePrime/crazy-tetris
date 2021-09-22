import { gql } from '@apollo/client';

export const QUERY_TOPSCORES = gql`
query {
    topscores {
        username
        highscore
    }
}
`;