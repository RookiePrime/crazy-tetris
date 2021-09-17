const { Schema } = require('mongoose');

const highScores = new Schema({
  highscore: {
    type: String
  },
  username: {
    type: String,
    required: true,
  }
});

module.exports = highScores;
