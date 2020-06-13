const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

// request handling
app.get('/', (req, res) => {
  res.status(200).send('Hello, world! This is the Petful Server!');
});

module.exports = app;
