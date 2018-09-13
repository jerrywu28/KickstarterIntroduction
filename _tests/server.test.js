const axios = require('axios');

describe('GET returns an array of all projects', () => {
  it('should handle GET requests by sending back an array of objects', () => {
    return axios.get('http://127.0.0.1:3000/projects/')
    .then(projects => {
      expect(Array.isArray(projects.data)).toEqual(true);
    })    
  })
})

describe('Arrays returned by GET contain objects for each project', () => {
  it('should handle GET requests by sending back an array of objects', () => {
    return axios.get('http://127.0.0.1:3000/projects/')
    .then(projects => {
      expect(typeof projects.data[0]).toEqual('object');
    })
  })
})

describe('Each project should have properties matching the schema from database', () => {
  it('should contain name, owner, player, status, and summary properties', () => {
    return axios.get('http://127.0.0.1:3000/projects/')
    .then(projects => {
      const projectProps = ['name', 'owner', 'player', 'status', 'summary'];
      let aProject = projects.data[0]
      let numMatchingProps = Object.keys(aProject).reduce((acc, val) => {
        if (projectProps.indexOf(val) !== - 1) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0)
      expect(numMatchingProps).toEqual(5);
    })
  })
})