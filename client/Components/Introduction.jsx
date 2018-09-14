import NavBar from './navbar.jsx';
import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';
import OwnerModal from './ownermodal.jsx';
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
      backButtonClicked: false,
      ownerClicked: false,
    }
    this.getProject = this.getProject.bind(this);
    this.ownerClicked = this.ownerClicked.bind(this);
    this.backButtonClicked = this.backButtonClicked.bind(this);
  }

  componentDidMount() {
    this.getProject(10);
  }

  getProject(projectid) {
    //Set to 1 for now, but project id can be passed in to fetch specific project
    axios.get(`http://127.0.0.1:3000/projects/${projectid}`)
    .then(project => {
      this.setState({
        project: project.data[0],
        owner: project.data[0].owner,
        player: project.data[0].player,
        status: {
          backers: project.data[0].status.backers.toLocaleString(),
          currentRaised: project.data[0].status.currentRaised.toLocaleString(),
          deadline: project.data[0].status.deadline,
          targetGoal: project.data[0].status.targetGoal.toLocaleString(),
        },
      })
    })
  }

  ownerClicked() {
    this.setState({ownerClicked: !this.state.ownerClicked})
  }

  backButtonClicked() {
    this.setState({backButtonClicked: !this.state.backButtonClicked})
  }

  render() {
    return (
      <div onKeyDown={event => {
        if (event.keyCode === 27){
          this.setState({
            ownerClicked: false,
            backButtonClicked: false,
          })
        }
      }}>
        <div id="navigation-bar">
          <NavBar />
        </div>
        <div id="header">
          <Header project={this.state.project} owner={this.state.owner} ownerClicked={this.ownerClicked}/>
        </div>
          {this.state.backButtonClicked ?
          <BackProjectModal backButtonClicked={this.backButtonClicked} project={this.state.project} owner={this.state.owner}/>
          : null}
          {this.state.ownerClicked ? 
          <OwnerModal ownerClicked={this.ownerClicked} owner={this.state.owner} player={this.state.player}/>
          : null}
        <div className="player-and-status-container">
          <Player project={this.state.project} player={this.state.player}/><Status stats={this.state.status} backButtonClicked={this.backButtonClicked}/>
        </div>
      </div>
    )
  }
}

export default Introduction;