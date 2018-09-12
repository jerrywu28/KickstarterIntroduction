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

app.get('/projects/:id', (req, res) => {
  // Before sending data to server, days left should be formatted properly here (instead of inside of the database).
  // Also, server can convert $ pledged and goal to strings (with commas)
  // Even final date notice can be formatted at this point (if format is undesirable)
  console.log('Server receiving GET request for project with id: ', req.params.id);
  database.findProject({id: req.params.id}, projects => res.status(200).send(projects));
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, console.log('Listening in on port: ', PORT));
}