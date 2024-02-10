// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = 3000; // Change as needed

// // Connect to MongoDB Atlas (replace placeholders)
// const mongoURI= mongoose.connect('mongodb+srv://7981526070krj:12345678cluster@cluster0.npil1bg.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// //   useCreateIndex:true,
// //   useFindAndModify:false
// serverSelectionTimeoutMS:5000
// });
// const db=mongoose.connection;
// db.on('error',console.error.bind(console, 'Mongodb connection error:'))
// db.once('open',()=>{
//     console.log('Connected to Mongodb');
// });

// // Define player schema
// const playerSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   image: String,
//   // Add more fields as needed
// });

// const Player = mongoose.model('Player', playerSchema);

// // Home page with link to players
// app.get('/', (req, res) => {
//   res.send('<a href="/players">Go to Players</a>');
// });

// // Players page with details of the first player
// app.get('/players', async (req, res) => {
//   try {
//     const firstPlayer = await Player.findOne().lean(); // Assuming you have players in your database
//     res.json(firstPlayer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Next button to get details of the next player
// app.get('/nextPlayer/:currentPlayerId', async (req, res) => {
//   try {
//     const currentPlayerId = req.params.currentPlayerId;
//     const nextPlayer = await Player.findOne({ _id: { $gt: currentPlayerId } }).lean();
//     res.json(nextPlayer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// // const express = require('express');
// // const mongoose = require('mongoose');
// // const Player = require('./models/player');

// // const app = express();
// // const PORT = 3000;

// // mongoose.connect('mongodb+srv://7981526070krj:12345678cluster@cluster0.npil1bg.mongodb.net/?retryWrites=true&w=majority', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });

// // app.set('view engine', 'ejs');
// // app.use(express.static('public'));

// // // Home Page
// // app.get('/', (req, res) => {
// //   res.render('home');
// // });

// // // Players Page
// // app.get('/players', async (req, res) => {
// //   try {
// //     const firstPlayer = await Player.findOne().lean();
// //     if (!firstPlayer) {
// //       return res.render('error', { message: 'No players found' });
// //     }
// //     res.render('players', { player: firstPlayer });
// //   } catch (error) {
// //     console.error(error);
// //     res.render('error', { message: 'Internal Server Error' });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });









const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://7981526070krj:12345678cluster@cluster0.npil1bg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Song Schema
const songSchema = new mongoose.Schema({
  title: String,
  audioURL: String,
});

const Song = mongoose.model('Song', songSchema);

app.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.render('index', { songs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});















