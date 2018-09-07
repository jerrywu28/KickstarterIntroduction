const mongoose = require('mongoose');
// const fakedata = require('./fakedata.js');
const faker = require('faker');
mongoose.connect('mongodb://127.0.0.1:27017/projects', { useNewUrlParser: true });

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    index: true
  },
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
    deadline: Number
  }
});

const Project = mongoose.model('Project', projectSchema);

const createProject = projects => {
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

const findProjects = callback => {
  Project.find()
  .then(projects => callback(projects));
}

const generateFakes = () => {
  for (let i = 1; i < 100; i++) {
    let fakeObj = new Project({
      name: faker.company.companyName(),
      summary: faker.company.catchPhrase(),
      owner: {
        avatar: faker.image.avatar(),
        name: faker.company.bsBuzz(),
        numProjects: Math.ceil(Math.random() * 3)
      },
      player: {
        source: 'https://www.youtube.com/embed/hHW1oY26kxQ',
        location: faker.address.city() + ', ' + faker.address.state()
      },
      status: {
        currentRaised: Math.floor(Math.random() * 1000),
        targetGoal: Math.floor(Math.random() * 10000),
        backers: Math.floor(Math.random() * 1000),
        deadline: new Date().setDate(new Date().getDate() + (Math.random()*8400000))
      }
    });

    fakeObj.validate((err) => {
        if (err) {
          console.log('Error with validation: ', err);
        } else {
          fakeObj.save(err => {
            if (err) {
              console.error(err);
            }
          })
        }
    })
  }
}
// generateFakes();


// $.ajax({
//     url: "https://www.kickstarter.com/projects/search.json?search=&term=era-the-chosen-a-horror-rpg-defend-our-dimension-0",
//     type: "GET",
//     success: data => console.log(data),
//   error: err => console.log('err', err)
// })

module.exports.createProject = createProject
module.exports.findProjects = findProjects;