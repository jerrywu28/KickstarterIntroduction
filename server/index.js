const express = require('express');
const parser = require('body-parser');
const database = require('../database/index.js');
const app = express();

app.use(express.static(__dirname + '/../public'), express.urlencoded({extended:true}), parser.json());

app.get('/', (req, res) => {
  console.log('Server receiving GET request.');
  res.status(200).send();
})

app.post('/', (req, res) => {
  console.log('Server receiving POST request');
  res.status(201).send();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Listening in on port: ', PORT));