// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Auth {
    token: ID!
    user: User
  }

  type Highscore {
    highscore: Int!
    username: String!
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Query {
    me: User
    highscores: [Highscore]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addScore(username: String!, highscore: Int!): Highscore
  }
`;

module.exports = typeDefs;