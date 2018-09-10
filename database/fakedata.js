// const faker = require('faker');

const projects = [{ name: 'L O F I • Hip Hop Radio • 24/7',
    summary: 'Help fund our lofi hip hop livestream, full of mellow melodic beats perfect for studying, work, relaxing, or focusing..',
    owner: 
     { avatar: 'https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no',
       name: 'Chillhop Music',
       numProjects: 2,
     },
    player: 
     { source: 'https://www.youtube.com/embed/LsBrT6vbQa8',
       location: 'Brooklyn, NY',
     },
    status: 
     { currentRaised: 8820,
       targetGoal: 25000,
       backers: 7598,
       deadline: 1538025653155,
       formatted: 1538025653155}
       ,},
  { name: 'Steak Cooked in a Log of Butter',
    summary: 'Chef Casper Stuhr Sobczyk creates and serves a rib eye that has been coated and aged in a log of butter. This unique preparation process aims to solve the problems that come with regular wet and dry aging of meat.',
    owner: 
     { avatar: 'https://yt3.ggpht.com/a-/AN66SAxLt483LPeh_W8F_doq-7QE2PErDqpMGDZUXA=s88-mo-c-c0xffffffff-rj-k-no',
       name: 'FOOD INSIDER',
       numProjects: 5,
      },
    player: 
     { source: 'https://www.youtube.com/embed/suhyTlTi28A',
       location: 'San Francisco, CA',
     },
    status: 
     { currentRaised: 24720,
       targetGoal: 50000,
       backers: 17598,
       deadline: 1538025653156,
       formatted: 1538025653156 },
     },
]

//Populate 100 additional data objects:
// for (let i = 1; i < 200; i++) {
//   let fakeObj = {
//     name: faker.company.companyName(),
//     summary: faker.company.catchPhrase(),
//     owner: {
//       avatar: faker.image.avatar(),
//       name: faker.company.bsBuzz(),
//       numProjects: faker.random.number()
//     },
//     player: {
//       source: 'https://www.youtube.com/embed/hHW1oY26kxQ',
//       location: faker.address.city() + ', ' + faker.address.state()
//     },
//     status: {
//       currentRaised: faker.random.number() * 10,
//       targetGoal: faker.random.number() * 1000,
//       backers: faker.random.number(),
//       deadline: new Date().setDate(new Date().getDate() + faker.random.number())
//     }
//   }
//   // projects.push(fakeObj);
// }
// console.log(projects);

module.exports.projects = projects;