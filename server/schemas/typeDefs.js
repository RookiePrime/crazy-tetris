// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Auth {
    token: ID!
    user: User
  }

  type Highscore {
    highscore: Int
    username: String!
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type HighscoreAdd {
    _id: ID
    highscore: Int
  }

  type Query {
    me: User
    topscores: [Highscore]
    highscores(username: String!): [Highscore]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addScore(username: String!, highscore: Int!): Highscore
    addHighscore(highscore: Int!): HighscoreAdd
  }
`;

module.exports = typeDefs;