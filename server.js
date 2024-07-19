if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const Mongoose = require('mongoose')
const path = require('path');
const app = express();
const indexRouter = require('./routes/index'); // Ensure the path is correct

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Set the views directory

// Use the index router
app.use('/', indexRouter);

const mongoose = Mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on http://localhost:${3000}');
});
