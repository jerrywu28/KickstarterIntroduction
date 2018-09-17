import React from 'react';
import moment from 'moment';
import './styles/status.css'

const Status = props => {
  return (
    <div className="status-box">
      <progress value={props.stats.currentRaised} max={props.stats.targetGoal}></progress><br />
      <div id="funds-raised">${props.stats.currentRaisedString}</div>
      <div className="project-stats-text">pledged as of ${props.stats.targetGoalString} goal</div><br />
      <div className="project-stats">{props.stats.backers}</div>
      <div className="project-stats-text">backers</div><br />
      <div className="project-stats">{moment(props.stats.deadline).diff(moment(), 'days')}</div>
      <div className="project-stats-text">days to go</div><br />
      <button className="status" id="back-project" onClick={() => props.backButtonClicked()}>Back this project</button><br />
      <button className="status" id="follow-project" onClick={() => props.followProjectClicked()}><div className="glyphicon glyphicon-bookmark"></div> Follow Project</button>
      <a className="gray-link" href="#"><i className="fab fa-facebook"></i></a>
      <a className="gray-link" href="#"><i className="fab fa-twitter"></i></a>
      <a className="gray-link" href="#"><i className="fas fa-envelope"></i></a>
      <a className="gray-link" href="#"><i className="fas fa-code"></i></a><br />
      <br /><p id="project-term"><u>All or nothing.</u>This project will only be funded if it reaches its goal by {moment(props.stats.deadline).format('LLLL')}.</p>
    </div>
  )
}

export default Status;