const faker = require('faker');

/*
This page is not currently working. Need to figure how to import the constructor/model for Projects to here
in order to generate/simulate data. For now, lines 50 to 92 should be copied and pasted to database/index.js
And faker should be required as well in order to run the simulation.
*/

//These were the first two original projects
const projects = [{ name: 'L O F I • Hip Hop Radio • 24/7',
  summary: 'Help fund our lofi hip hop livestream, full of mellow melodic beats perfect for studying, work, relaxing, or focusing..',
  owner: 
     { avatar: 'https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no',
       name: 'Chillhop Music',
       numProjects: 2,
       summary: 'Spectrum South is on a mission to bring visibility to the diverse and resilient individuals, groups, and personalities of the ever-growing LGBTQ South. We\'re a Texas-based online magazine focused on queer southern identity and culture. Through inclusive, well-curated interviews, commentaries, and personal narratives, we share the stories of the South’s thriving LGBTQ community of innovators, taco truck junkies, hip-hop lovers, dreamers, sweet tea drinkers, techies, and more. Wherever you fall on the spectrum—gay or trans, big city born or small town grown—Spectrum South happily celebrates you and your authenticity.',
     },
  player: 
     { source: 'https://www.youtube.com/embed/LsBrT6vbQa8',
       location: 'Brooklyn, NY',
     },
  status: 
     { currentRaised: 8820,
       targetGoal: 25000,
       backers: 7598,
       deadline: 1538025653155,}
  , },
{ name: 'Steak Cooked in a Log of Butter',
  summary: 'Chef Casper Stuhr Sobczyk creates and serves a rib eye that has been coated and aged in a log of butter. This unique preparation process aims to solve the problems that come with regular wet and dry aging of meat.',
  owner: 
     { avatar: 'https://yt3.ggpht.com/a-/AN66SAxLt483LPeh_W8F_doq-7QE2PErDqpMGDZUXA=s88-mo-c-c0xffffffff-rj-k-no',
       name: 'FOOD INSIDER',
       numProjects: 5,
       summary: 'Spectrum South is on a mission to bring visibility to the diverse and resilient individuals, groups, and personalities of the ever-growing LGBTQ South. We\'re a Texas-based online magazine focused on queer southern identity and culture. Through inclusive, well-curated interviews, commentaries, and personal narratives, we share the stories of the South’s thriving LGBTQ community of innovators, taco truck junkies, hip-hop lovers, dreamers, sweet tea drinkers, techies, and more. Wherever you fall on the spectrum—gay or trans, big city born or small town grown—Spectrum South happily celebrates you and your authenticity.',
     },
  player: 
     { source: 'https://www.youtube.com/embed/suhyTlTi28A',
       location: 'San Francisco, CA',
     },
  status: 
     { currentRaised: 24720,
       targetGoal: 50000,
       backers: 17598,
       deadline: 1538025653156,},
},
];

// Originally in /database/index.js file, but moved over here for clearer organization.
// currently, line 50 (new Project) does not work as it does not recognize Project as a constructor
const generateFakes = () => {
  const otherVideos = ['LsBrT6vbQa8', 'hHW1oY26kxQ', 'XK_5upZT4C4', 'UPftsIwGNoQ', '_0OVRN4vU20', '6rReMbO42uE', 'vfWv7j4FIxQ', 'FhzAjZlnGjw', 'y7e-GC6oGhg', 'dhXx2ihRzD8', 'HbeCzCw1tT4', 'EPUOSBrBkZk', '47dtFZ8CFo8', 'O8lFeVfYw_s', 'VYOjWnS4cMY', 'Kp7eSUU9oy8', '_FhgEeAj9ng', 'LsoLEjrDogU', 'sFE-U0Dc8hY', 'bO4HnZ7XLsU', 'Jq59GIshkEA', 'em0MknB6wFo', '5hxibHJOE5E', 'oH6mw2Rc3DQ', 'b9u3Il-fu5I', 'iWMy_bkCtM4', '5ZbklKAAnkI', 'vq6akoG3x2I', 'fgT9zGkiLig', 'K1b8AhIsSYQ', 'mrZRURcb1cM', 'Gs069dndIYk', 'tIdIqbv7SPo', 'jEy6MGu3bIA', 'DPgMjXhqmfw', 'Gru4IfbKlfU', 'y32ejtuxSjM', '5X-Mrc2l1d0', 'V1bFr2SWP1I', 'Glny4jSciVI', 'hWmgsfiklcs', 'elVF7oG0pQs', 'Ic5vxw3eijY', 'CGfKi6kpdTQ', 'Lo2qQmj0_h4', 'v2AC41dglnM', 'I_2D8Eo15wE', 'PeMvMNpvB5M', 'np0solnL1XY', 'fJ9rUzIMcZQ', '1vrEljMfXYo', 'GONmFCkCGCc', 'uAsV5-Hv-7U', 'FTQbiNvZqaY', '3wxyN3z9PL4', 'Xk2NHZukTYg', 'yRYFKcMa_Ek', 'Hn-enjcgV1o', '3DSVMDmzCcA', 'EErSKhC0CZs', 'ccenFp_3kq8', 'LsBrT6vbQa8', 'hHW1oY26kxQ', 'XK_5upZT4C4', 'UPftsIwGNoQ', '_0OVRN4vU20', '6rReMbO42uE', 'vfWv7j4FIxQ', 'FhzAjZlnGjw', 'y7e-GC6oGhg', 'dhXx2ihRzD8', 'HbeCzCw1tT4', 'EPUOSBrBkZk', '47dtFZ8CFo8', 'O8lFeVfYw_s', 'VYOjWnS4cMY', 'Kp7eSUU9oy8', '_FhgEeAj9ng', 'LsoLEjrDogU', 'sFE-U0Dc8hY', 'bO4HnZ7XLsU', 'Jq59GIshkEA', 'em0MknB6wFo', '5hxibHJOE5E', 'oH6mw2Rc3DQ', 'b9u3Il-fu5I', 'iWMy_bkCtM4', '5ZbklKAAnkI', 'vq6akoG3x2I', 'fgT9zGkiLig', 'K1b8AhIsSYQ', 'mrZRURcb1cM', 'Gs069dndIYk', 'tIdIqbv7SPo', 'jEy6MGu3bIA', 'DPgMjXhqmfw', 'Gru4IfbKlfU', 'y32ejtuxSjM', '5X-Mrc2l1d0', 'V1bFr2SWP1I', 'Glny4jSciVI', 'hWmgsfiklcs', 'elVF7oG0pQs', 'Ic5vxw3eijY', 'CGfKi6kpdTQ', 'Lo2qQmj0_h4', 'v2AC41dglnM', 'I_2D8Eo15wE', 'PeMvMNpvB5M', 'np0solnL1XY', 'fJ9rUzIMcZQ', '1vrEljMfXYo', 'GONmFCkCGCc', 'uAsV5-Hv-7U', 'FTQbiNvZqaY', '3wxyN3z9PL4', 'Xk2NHZukTYg', 'yRYFKcMa_Ek', 'Hn-enjcgV1o', '3DSVMDmzCcA', 'EErSKhC0CZs', 'ccenFp_3kq8'];
  for (let i = 1; i < 100; i++) {
    const sampleDate = new Date().setDate(new Date().getDate() + (Math.random() * 90));
    // const daysLeft = Math.ceil((sampleDate - Date.now()) / 86400000);
    // const interimDate = new Date(sampleDate).toString().slice(0, 21);
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

// //Uncomment to generate 100 projects
generateFakes();

module.exports.projects = projects;