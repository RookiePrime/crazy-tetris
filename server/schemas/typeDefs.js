// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
  }

  type Highscores {
    _id: ID
    username: String
  }

  type HighscoreAdd {
    _id: ID
    highscore: String
  }

  type Query {
    me: User
    highscores(username: String): [Highscores]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHighscore(highscore: String!): HighscoreAdd
  }
`;

module.exports = typeDefs;