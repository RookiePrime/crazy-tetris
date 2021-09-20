const { Schema, model } = require('mongoose');

const highScores = new Schema({
  highscore: {
    type: String
  },
  username: {
    type: String,
    required: true,
  }
});

const Highscores = model('Highscores', highScores); 

module.exports = Highscores;
