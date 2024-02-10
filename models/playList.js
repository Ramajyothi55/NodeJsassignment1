// const mongoose = require('mongoose');

// // Define the schema for the songs
// const songSchema = new mongoose.Schema({
//   title: String,
//   genre: String,
//   mp3: String
// });

// // Define the schema for the player
// const playerSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   image: String,
//   songs: [songSchema]
// });

// // Create the Player model
// const Player = mongoose.model('Player', playerSchema);

// // Export the Player model
// module.exports = Player;

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  genre: String,
  mp3: String
});

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image: String,
  songs: [songSchema]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;