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
      player: {},
      status: {}
    }
    this.getProject = this.getProject.bind(this);
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    // get projects/:projectid
    axios.get('http://127.0.0.1:3000/projects/')
    .then(projects => {
      const index = Math.floor(Math.random() * 200);
      this.setState({
        project: projects.data[index],
        owner: projects.data[index].owner,
        player: projects.data[index].player,
        status: projects.data[index].status
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
          <Player project={this.state.project} player={this.state.player}/><Status project={this.state.project} stats={this.state.status}/>
        </div>
      </div>
    )
  }
}

export default Introduction

ReactDOM.render(<Introduction />, document.getElementById('introduction'));