import NavBar from './navbar.jsx';
import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';
import OwnerModal from './modals/ownermodal.jsx';
import BackProjectModal from './modals/backprojectmodal.jsx';
import OtherProjectsModal from './modals/otherprojectsmodal.jsx';
import FollowProjectModal from './modals/followprojectmodal.jsx';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/introduction.css';
import './styles/Fonts/MaisonNeue/fonts.css';

class Introduction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: {},
      owner: {},
      player: {},
      status: {},
      displayPledge: false,
      displayOwner: false,
      displayOtherProjects: false,
      displayFollow: false,

    }
    this.getProject = this.getProject.bind(this);
    this.ownerClicked = this.ownerClicked.bind(this);
    this.backButtonClicked = this.backButtonClicked.bind(this);
    this.otherProjectsClicked = this.otherProjectsClicked.bind(this);
    this.followProjectClicked = this.followProjectClicked.bind(this);
  }

//Esc key can be pressed to set all displays to false (to exit modal using this key)
  componentDidMount() {
    this.getProject();
    window.addEventListener('keydown', event => {
      if (event.keyCode === 27){
        this.setState({
          displayOwner: false,
          displayPledge: false,
          displayOtherProjects: false,
          displayFollow: false,
        })
      }
    })
  }

  getProject(projectid = window.location.pathname.slice(1)) {
    //Set to 1 for now, but project id can be passed in to fetch specific project
    axios.get(`http://127.0.0.1:3000/projects/${projectid}`)
    .then(project => {
      this.setState({
        project: project.data[0],
        owner: project.data[0].owner,
        player: project.data[0].player,
        status: {
          currentRaised: project.data[0].status.currentRaised,
          targetGoal: project.data[0].status.targetGoal,
          backers: project.data[0].status.backers.toLocaleString(),
          currentRaisedString: project.data[0].status.currentRaised.toLocaleString(),
          deadline: project.data[0].status.deadline,
          targetGoalString: project.data[0].status.targetGoal.toLocaleString(),
        },
      })
    })
  }

//Lines 69 through 80 are the click handlers to set corresponding modal display to true
  ownerClicked() {
    this.setState({displayOwner: !this.state.displayOwner});
  }
  backButtonClicked() {
    this.setState({displayPledge: !this.state.displayPledge});
  }
  otherProjectsClicked() {
    this.setState({displayOtherProjects: !this.state.displayOtherProjects});
  }
  followProjectClicked() {
    this.setState({displayFollow: !this.state.displayFollow});
  }

//Lines 94 through 105 will render the corresponding modal if its state is set to true.
  render() {
    return (
      <div>
        <div id="navigation-bar">
          <NavBar />
        </div>
        <div id="header">
          <Header project={this.state.project} owner={this.state.owner} ownerClicked={this.ownerClicked} otherProjectsClicked={this.otherProjectsClicked}/>
        </div>
          {this.state.displayOwner ? 
          <OwnerModal ownerClicked={this.ownerClicked} owner={this.state.owner} player={this.state.player}/>
          : null}
          {this.state.displayOtherProjects ? 
          <OtherProjectsModal owner={this.state.owner} otherProjectsClicked={this.otherProjectsClicked}/>
          : null}
          {this.state.displayPledge ?
          <BackProjectModal backButtonClicked={this.backButtonClicked} project={this.state.project} owner={this.state.owner}/>
          : null}
          {this.state.displayFollow ? 
          <FollowProjectModal followProjectClicked={this.followProjectClicked} />
          : null}
        <div className="player-and-status-container">
          <Player project={this.state.project} player={this.state.player}/><Status stats={this.state.status} backButtonClicked={this.backButtonClicked} followProjectClicked={this.followProjectClicked}/>
        </div>
      </div>
    )
  }
}

export default Introduction;