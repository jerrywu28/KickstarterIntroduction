import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';
const axios = require('axios');

class Introduction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: {},
      owner: {},
      status: {}
    }
    this.getProject = this.getProject.bind(this);
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    // $.ajax({
    //   url: 'http://127.0.0.1:3000/projects',
    //   type: 'GET',
    //   success: projects => {
    //     console.log(projects[0].status.deadline - Date.now())
    //     this.setState({project: projects[0],
    //       owner: projects[0].owner,
    //       status: projects[0].status
    //     })
    //   },
    //   error: err => {
    //     console.log('GET request error: ', err);
    //   }
    // })
    axios.get('http://127.0.0.1:3000/projects')
    .then(projects => {
      console.log(projects.data[0]);
      this.setState({
        project: projects.data[0],
        owner: projects.data[0].owner,
        status: projects.data[0].status
      })
    })
  }

  render() {
    return (
      <div>
        <div id="navigation-bar">
        </div>
        <div id="header">
          <Header project={this.state.project} owner={this.state.owner}/>
        </div>
        <div className="player-and-status-container">
          <Player project={this.state.project}/><Status project={this.state.project} stats={this.state.status}/>
        </div>
      </div>
    )
  }
}

export default Introduction

ReactDOM.render(<Introduction />, document.getElementById('introduction'));