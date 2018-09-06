const Status = props => {
  return (
    <div className="status-box">
      <progress value="7720" max="20000"></progress><br />
      <br />
      <span id="funds-raised">$7,720</span><br />
      <span className="project-stats-text">pledged as of $20,000 goal</span><br />
      <br />
      <span className="project-stats">1,423</span><br />
      <span className="project-stats-text">backers</span><br />
      <br />
      <span className="project-stats">21</span><br />
      <span className="project-stats-text">days to go</span><br />
      <br />
      <button id="back-project">Back this project</button><br />
      <button id="follow-project"><span class="glyphicon glyphicon-bookmark"></span> Follow Project</button><i class="fab fa-facebook"></i><i class="fab fa-twitter"></i><i class="fas fa-envelope"></i><i class="fas fa-code"></i><br />
      <br />
      <p id="project-term"><u>All or nothing.</u> This project will only be funded if it reaches its goal by Thu, September 27 2018 9:56 AM PDT.</p><br />
    </div>
  )
}


export default Status

//progress tag value and max should also be {props.status.currentRaised} and {props.status.targetGoal}