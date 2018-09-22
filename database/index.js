const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://172.17.0.3/projects', { useNewUrlParser: true });

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
    .then(projects => callback(projects))
    .catch(err => console.log('Error with finding all projects: ', err.message));
};

const findProject = (query, callback) => {
  Project.find(query)
  .then(projects => callback(projects))
  .catch(err => console.log('Error with finding single project from query: ', err.message));
};

const generateFakes = () => {
  const otherVideos = ['LsBrT6vbQa8', 'hHW1oY26kxQ', 'XK_5upZT4C4', 'UPftsIwGNoQ', '_0OVRN4vU20', '6rReMbO42uE', 'vfWv7j4FIxQ', 'FhzAjZlnGjw', 'y7e-GC6oGhg', 'dhXx2ihRzD8', 'HbeCzCw1tT4', 'EPUOSBrBkZk', '47dtFZ8CFo8', 'O8lFeVfYw_s', 'VYOjWnS4cMY', 'Kp7eSUU9oy8', '_FhgEeAj9ng', 'LsoLEjrDogU', 'sFE-U0Dc8hY', 'bO4HnZ7XLsU', 'Jq59GIshkEA', 'em0MknB6wFo', '5hxibHJOE5E', 'oH6mw2Rc3DQ', 'b9u3Il-fu5I', 'iWMy_bkCtM4', '5ZbklKAAnkI', 'vq6akoG3x2I', 'fgT9zGkiLig', 'K1b8AhIsSYQ', 'mrZRURcb1cM', 'Gs069dndIYk', 'tIdIqbv7SPo', 'jEy6MGu3bIA', 'DPgMjXhqmfw', 'Gru4IfbKlfU', 'y32ejtuxSjM', '5X-Mrc2l1d0', 'V1bFr2SWP1I', 'Glny4jSciVI', 'hWmgsfiklcs', 'elVF7oG0pQs', 'Ic5vxw3eijY', 'CGfKi6kpdTQ', 'Lo2qQmj0_h4', 'v2AC41dglnM', 'I_2D8Eo15wE', 'PeMvMNpvB5M', 'np0solnL1XY', 'fJ9rUzIMcZQ', '1vrEljMfXYo', 'GONmFCkCGCc', 'uAsV5-Hv-7U', 'FTQbiNvZqaY', '3wxyN3z9PL4', 'Xk2NHZukTYg', 'yRYFKcMa_Ek', 'Hn-enjcgV1o', '3DSVMDmzCcA', 'EErSKhC0CZs', 'ccenFp_3kq8', 'LsBrT6vbQa8', 'hHW1oY26kxQ', 'XK_5upZT4C4', 'UPftsIwGNoQ', '_0OVRN4vU20', '6rReMbO42uE', 'vfWv7j4FIxQ', 'FhzAjZlnGjw', 'y7e-GC6oGhg', 'dhXx2ihRzD8', 'HbeCzCw1tT4', 'EPUOSBrBkZk', '47dtFZ8CFo8', 'O8lFeVfYw_s', 'VYOjWnS4cMY', 'Kp7eSUU9oy8', '_FhgEeAj9ng', 'LsoLEjrDogU', 'sFE-U0Dc8hY', 'bO4HnZ7XLsU', 'Jq59GIshkEA', 'em0MknB6wFo', '5hxibHJOE5E', 'oH6mw2Rc3DQ', 'b9u3Il-fu5I', 'iWMy_bkCtM4', '5ZbklKAAnkI', 'vq6akoG3x2I', 'fgT9zGkiLig', 'K1b8AhIsSYQ', 'mrZRURcb1cM', 'Gs069dndIYk', 'tIdIqbv7SPo', 'jEy6MGu3bIA', 'DPgMjXhqmfw', 'Gru4IfbKlfU', 'y32ejtuxSjM', '5X-Mrc2l1d0', 'V1bFr2SWP1I', 'Glny4jSciVI', 'hWmgsfiklcs', 'elVF7oG0pQs', 'Ic5vxw3eijY', 'CGfKi6kpdTQ', 'Lo2qQmj0_h4', 'v2AC41dglnM', 'I_2D8Eo15wE', 'PeMvMNpvB5M', 'np0solnL1XY', 'fJ9rUzIMcZQ', '1vrEljMfXYo', 'GONmFCkCGCc', 'uAsV5-Hv-7U', 'FTQbiNvZqaY', '3wxyN3z9PL4', 'Xk2NHZukTYg', 'yRYFKcMa_Ek', 'Hn-enjcgV1o', '3DSVMDmzCcA', 'EErSKhC0CZs', 'ccenFp_3kq8'];
  for (let i = 1; i < 100; i++) {
    const sampleDate = new Date().setDate(new Date().getDate() + (Math.random() * 90));
    let fakeObj = new Project({
      id: i,
      name: faker.company.companyName(),
      summary: faker.company.catchPhrase(),
      owner: {
        avatar: faker.image.avatar(),
        name: faker.company.bsBuzz(),
        numProjects: Math.ceil(Math.random() * 3),
        summary: faker.lorem.paragraph(),
      },
      player: {
        source: 'https://www.youtube.com/embed/' + otherVideos[i],
        location: faker.address.city() + ', ' + faker.address.state(),
      },
      status: {
        currentRaised: Math.floor(Math.random() * 1000),
        targetGoal: Math.floor(Math.random() * 10000),
        backers: Math.floor(Math.random() * 1000),
        deadline: sampleDate,
      },
    });

    fakeObj.validate((err) => {
      if (err) {
        console.log('Error with validation: ', err);
      } else {
        fakeObj.save(err => {
          if (err) {
            console.error(err);
          }
        });
      }
    });
  }
};

//Uncomment to generate 100 projects
generateFakes();

module.exports.Project = Project;
module.exports.createProject = createProject;
module.exports.findProjects = findProjects;
module.exports.findProject = findProject