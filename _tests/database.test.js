const database = require('./../database/index.js');

describe('Retrieve collection for Projects', () => {
  it('Should find an array containing all projects', () => {
    return database.Project.find()
    .then(projects => expect(Array.isArray(projects)).toEqual(true));
  })
})

describe('Find projects function should apply callback to retrieved array', () => {
  it('Should allow callback to be used on projects array to handle async challenges', () => {
    return database.findProjects(projects => {
      let result = [];
      projects.forEach(project => {
        result.push(project);
      })
      //Expected length is equal to number of projects in database
      expect(result.length).toEqual(101);
    })
  })
});

describe('Insertion of new Mongo documents into database', () => {
  it('Should find a document after it has been inserted into database', () => {
    database.createProject([{
      id: 100,
      name: 'L O F I • Hip Hop Radio • 24/7',
      summary: 'Help fund our lofi hip hop livestream, full of mellow melodic beats perfect for studying, work, relaxing, or focusing..',
      owner: {
        avatar: 'https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no',
        name: 'Chillhop Music',
        numProjects: 2,
        summary: 'Spectrum South is on a mission to bring visibility to the diverse and resilient individuals, groups, and personalities of the ever-growing LGBTQ South. We\'re a Texas-based online magazine focused on queer southern identity and culture. Through inclusive, well-curated interviews, commentaries, and personal narratives, we share the stories of the South’s thriving LGBTQ community of innovators, taco truck junkies, hip-hop lovers, dreamers, sweet tea drinkers, techies, and more. Wherever you fall on the spectrum—gay or trans, big city born or small town grown—Spectrum South happily celebrates you and your authenticity.',
        },
      player: {
        source: 'https://www.youtube.com/embed/LsBrT6vbQa8',
        location: 'Brooklyn, NY',
        },
      status: {
        currentRaised: 8820,
        targetGoal: 25000,
        backers: 7598,
        deadline: 1538025653155,
        formatted: 1538025653155
      }
    }])
    return database.Project.find({name: 'L O F I • Hip Hop Radio • 24/7'})
    .then(projects => expect(projects[0].name).toEqual('L O F I • Hip Hop Radio • 24/7'));
  })
})