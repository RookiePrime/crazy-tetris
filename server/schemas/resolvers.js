const { User, Highscores } = require('../models');
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
      
      highscores: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Highscores.find(params);
      },
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
        addHighscore: async (parent, args, context) => {
          if (context.user) {
            const highscore = await Highscores.create({ ...args, username: context.user.username });
        console.log(highscore.highscore);
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { highscore: highscore.highscore } },
              { new: true }
            );
        
            return highscore;
          }
        
          throw new AuthenticationError('You need to be logged in!');
        }
    }
  };
  
  module.exports = resolvers;