const { User, Highscore } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
      topscores: async () => {
        return Highscore.find().sort('-highscore').limit(5);
      },
      highscores: async (parent, { username }) => {
        const params = { username };
        return Highscore.find(params).sort('-highscore');
      },
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
      
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
      addHighscore: async (parent, args, context) => {
        if (context.user) {
          const data = await Highscore.create({ ...args, username: context.user.username });
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: data.highscore._id },
            { new: true }
          );
          return data;
        }
        
        throw new AuthenticationError('You need to be logged in!');
      }
    }
};
  
module.exports = resolvers;