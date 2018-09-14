const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/projects', { useNewUrlParser: true });

const projectSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
  },
  name: String,
  summary: String,
  owner: {
    avatar: String,
    name: String,
    numProjects: Number,
    summary: String,
  },
  player: {
    source: String,
    location: String,
  },
  status: {
    currentRaised: Number,
    targetGoal: Number,
    backers: Number,
    deadline: Number,
  },
});

const Project = mongoose.model('Project', projectSchema);

const createProject = projects => {
  projects.forEach(project => {
    const object = new Project({
      id: project.id,
      name: project.name,
      summary: project.summary,
      owner: {
        avatar: project.owner.avatar,
        name: project.owner.name,
        numProjects: project.owner.numProjects,
        summary: project.owner.summary,
      },
      player: {
        source: project.player.source,
        location: project.player.location,
      },
      status: {
        currentRaised: project.status.currentRaised,
        targetGoal: project.status.targetGoal,
        backers: project.status.backers,
        deadline: project.status.deadline,
      },
    });

    object.validate((err) => {
      if (err) {
        console.log('Error with validation: ', err);
      } else {
        object.save(err => {
          if (err) {
            console.error(err);
          }
        });
      }
    });
  });
};

const findProjects = callback => {
  Project.find()
    .then(projects => callback(projects));
};

const findProject = (query, callback) => {
  Project.find(query)
  .then(projects => callback(projects));
};

module.exports.Project = Project;
module.exports.createProject = createProject;
module.exports.findProjects = findProjects;
module.exports.findProject = findProject