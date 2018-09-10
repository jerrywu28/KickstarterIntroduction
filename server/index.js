const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const database = require('../database/index.js');
const app = express();

app.use(express.static(__dirname + '/../public'), express.urlencoded({extended: true}), parser.json(), cors());

app.get('/projects', (req, res) => {
  console.log('Server receiving GET request for all projects.');
  database.findProjects(projects => res.status(200).send(projects));
});

app.get('/projects/1', (req, res) => {
  console.log('Server receiving GET request for project 1.');
  database.findProjects({name: 'L O F I • Hip Hop Radio • 24/7'}, projects => res.status(200).send(projects));
});

app.post('/', (req, res) => {
  console.log('Server receiving POST request');
  res.status(201).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Listening in on port: ', PORT));