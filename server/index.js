const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Import Routes files
const todoRoutes = require('./routes/todos');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://harshalgosawi:mongodbHarshal2k@bookslist.co15j1q.mongodb.net/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('MongoDB connection failed! ' + err);
});

app.use('/api/todos', todoRoutes);

// Server
const PORT = process.env.PORT || 5566;

app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
});
