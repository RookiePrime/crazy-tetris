const { User, Highscores } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const Highscore = require('../models/Highscores');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password');
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      highscores: async () => {
        return Highscores.find().sort('-highscore').limit(5);
      }
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },
      addScore: async (parent, { highscore, username }) => {
        const newScore = await Highscore.create({ highscore, username })
        return newScore;
      }
    }
  };
  
  module.exports = resolvers;