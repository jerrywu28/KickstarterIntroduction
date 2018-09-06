const mongoose = require('mongoose');
const fakedata = require('./fakedata.js');
mongoose.connect('mongodb://127.0.0.1:27017/projects');

const projectSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  summary: String,
  owner: {
    avatar: String,
    name: String,
    numProjects: Number
  },
  player: {
    source: String,
    location: String
  },
  status: {
    currentRaised: Number,
    targetGoal: Number,
    backers: Number,
    deadline: Date
  }
});

const Project = mongoose.model('Project', projectSchema);

const createDoc = projects => {
  projects.forEach(project => {
    const object = new Project({
      name: project.name,
      summary: project.summary,
      owner: {
        avatar: project.owner.avatar,
        name: project.owner.name,
        numProjects: project.owner.numProjects
      },
      player: {
        source: project.player.source,
        location: project.player.location
      },
      status: {
        currentRaised: project.status.currentRaised,
        targetGoal: project.status.targetGoal,
        backers: project.status.backers,
        deadline: project.status.deadline
      }
    });

    object.validate((err) => {
      if (err) {
        console.log('Error with validation: ', err);
      } else {
        object.save(err => {
          if (err) {
            console.error(err);
          }
        })
      }
    })
  })
}

createDoc(fakedata.projects);

const findDoc = (project, callback) => {
  Project.find({}, callback)
}

// $.ajax({
//     url: "https://www.kickstarter.com/projects/search.json?search=&term=era-the-chosen-a-horror-rpg-defend-our-dimension-0",
//     type: "GET",
//     success: data => console.log(data),
//   error: err => console.log('err', err)
// })

module.exports.createDoc = createDoc;
module.exports.findDoc = findDoc;