const { Schema, model } = require('mongoose');

const highScoreSchema = new Schema({
  highscore: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true,
  }
});

const Highscore = model('Highscore', highScoreSchema);

module.exports = Highscore;
