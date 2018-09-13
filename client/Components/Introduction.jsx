import NavBar from './navbar.jsx';
import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';
import BackProjectModal from './backprojectmodal.jsx';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

class Introduction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: {},
      owner: {},
      player: {},
      status: {},
      backButtonClicked: false
    }
    this.getProject = this.getProject.bind(this);
    this.backButtonClicked = this.backButtonClicked.bind(this);
  }

  componentDidMount() {
    this.getProject(1);
  }

  getProject(projectid) {
    //Set to 1 for now, but project id can be passed in to fetch specific project
    axios.get(`http://127.0.0.1:3000/projects/${projectid}`)
    .then(project => {
      this.setState({
        project: project.data[0],
        owner: project.data[0].owner,
        player: project.data[0].player,
        status: project.data[0].status,
      })
    })
  }

  backButtonClicked() {
    this.setState({backButtonClicked: !this.state.backButtonClicked})
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
          {this.state.backButtonClicked ?
          <BackProjectModal backButtonClicked={this.backButtonClicked} project={this.state.project} owner={this.state.owner}/>
          : null}
        <div className="player-and-status-container">
          <Player project={this.state.project} player={this.state.player}/><Status stats={this.state.status} backButtonClicked={this.backButtonClicked}/>
        </div>
      </div>
    )
  }
}

export default Introduction;