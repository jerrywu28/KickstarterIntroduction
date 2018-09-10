import NavBar from './navbar.jsx';
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
      status: {},
      searchClicked: false,
    }
    this.getProject = this.getProject.bind(this);
    this.handleSearchClick = this.handleSearchClick(this);
  }

  componentWillMount() {
    this.getProject();
  }

  // componentDidUpdate(prevProps) {
  // if (this.props.userID !== prevProps.userID) {
  //   this.fetchData(this.props.userID);
  //   }
  // }

  getProject() {
    // get projects/:projectid
    axios.get('http://127.0.0.1:3000/projects/')
    .then(projects => {
      const index = Math.floor(Math.random() * 100);
      this.setState({
        project: projects.data[index],
        owner: projects.data[index].owner,
        player: projects.data[index].player,
        status: projects.data[index].status,
      })
    })
  }

  handleSearchClick() {
    this.setState({searchClicked: !this.state.searchClicked})
  }

  render() {
    return (
      <div>
        <div id="navigation-bar">
          <NavBar handleSearchClick={this.handleSearchClick}/>
        </div>
        <div id="header">
          <Header project={this.state.project} owner={this.state.owner}/>
        </div>
        <div className="player-and-status-container">
          <Player project={this.state.project} player={this.state.player}/><Status stats={this.state.status}/>
        </div>
      </div>
    )
  }
}

export default Introduction

ReactDOM.render(<Introduction />, document.getElementById('introduction'));