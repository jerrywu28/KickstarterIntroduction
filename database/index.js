const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');
const db = mongoose.connection;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Project = db.model('Project', projectSchema);

const createDoc = projects => {
  projects.forEach(project => {
    const object = new Project();

    object.save(err => {
      if (err) {
        console.error(err);
      }
    })
  })
}

const findDoc = (project, callback) => {
  Project.find({}, callback)
}

$.ajax({
    url: "https://www.kickstarter.com/projects/search.json?search=&term=era-the-chosen-a-horror-rpg-defend-our-dimension-0",
    type: "GET",
    success: data => console.log(data),
  error: err => console.log('err', err)
})