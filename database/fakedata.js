const projects = [{
  name: 'L O F I • Hip Hop Radio • 24/7',
  summary: 'Help fund our lofi hip hop livestream, full of mellow melodic beats perfect for studying, work, relaxing, or focusing..',
  owner: {
    avatar: 'https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no',
    name: 'Chillhop Music',
    numProjects: 2
  },
  player: {
    source: 'https://www.youtube.com/embed/LsBrT6vbQa8',
    location: 'Brooklyn, NY'
  },
  status: {
    currentRaised: 8820,
    targetGoal: 25000,
    backers: 7598,
    deadline: new Date().setDate(new Date().getDate() + 20)
  }
}]

module.exports.projects = projects;