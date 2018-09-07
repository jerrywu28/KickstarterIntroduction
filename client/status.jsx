const Status = props => {
  let daysLeft = Math.ceil(props.stats.deadline / 8640000000000)
  return (
    <div className="status-box">
      <progress value={props.stats.currentRaised} max={props.stats.targetGoal}></progress><br />
      <br />
      <span id="funds-raised">${props.stats.currentRaised}</span><br />
      <span className="project-stats-text">pledged as of ${props.stats.targetGoal} goal</span><br />
      <br />
      <span className="project-stats">{props.stats.backers}</span><br />
      <span className="project-stats-text">backers</span><br />
      <br />
      <span className="project-stats">{daysLeft}</span><br />
      <span className="project-stats-text">days to go</span><br />
      <br />
      <button id="back-project" onClick={() => console.log('This function will create a modal to contribute funds.')}>Back this project</button><br />
      <button id="follow-project" onClick={() => console.log('This function does not follow project yet.')}><span className="glyphicon glyphicon-bookmark"></span> Follow Project</button><i className="fab fa-facebook"></i><i className="fab fa-twitter"></i><i className="fas fa-envelope"></i><i className="fas fa-code"></i><br />
      <br />
      <p id="project-term"><u>All or nothing.</u> This project will only be funded if it reaches its goal by {props.stats.deadline}.</p><br />
    </div>
  )
}


export default Status