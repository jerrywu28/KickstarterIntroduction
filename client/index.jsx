import NavBar from './navbar.jsx';
import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

  componentDidMount() {
    this.getProject();
  }

  getProject(projectid) {
    //Set to 1 for now, but project id can be passed in to fetch specific project
    axios.get('http://127.0.0.1:3000/projects/1')
    .then(project => {
      this.setState({
        project: project.data[0],
        owner: project.data[0].owner,
        player: project.data[0].player,
        status: project.data[0].status,
      })
    })
  }

  handleSearchClick() {
    this.setState({searchClicked: !this.state.searchClicked});
  }

  render() {
    return (
      <div>
        <div id="navigation-bar">
          <NavBar />
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

ReactDOM.render(<Introduction />, document.getElementById('introduction'));

export default Introduction