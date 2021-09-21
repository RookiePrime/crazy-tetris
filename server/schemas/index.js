const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };


// type Highscores {
//     _id: ID
//     highscore: String
//     username: String
//   }
    // highscore: Highscores
    
    // addHighscore(highscore: String!, username: String!)
          // highscore: async (parent,args) => {
      //   if (context.user) {
      //     const highsco = await Highscores.find(context.user).sort({ highscore: -1 })
      //   return highsco;
      // }
      // throw new AuthenticationError('Not logged in');
      // }

    //   ,
    //   addHighscore: async (parent, args) => {
    //     if (context.user) {
    //       const highscore = await Highscores.create({ ...args, username: context.user.username });      
    //       return highscore;
    //     }
      
    //     throw new AuthenticationError('You need to be logged in!');
    //   }
    
        // addHighscore: async (parent, args) => {
        //   if (context.user) {
        //     const highscore = await Highscores.create({ ...args, username: context.user.username }); 
        //     console.log(highscore);     
        //     return highscore;
        //   }
        
        //   throw new AuthenticationError('You need to be logged in!');
        // }