import React from 'react';
import '../styles/followprojectmodal.css';

const FollowProjectModal = props => (
  <div>
    <div className="follow-project-modal">
      <button className="close-project-modal x-button" onClick={() => props.followProjectClicked()}>&times;</button>
      <div className="follow-project-display">
        <center><h3>Save</h3></center><br />
        <p><a href="#">Log in</a> to your Kickstarter account to save this project.<br />
        <br />
        Don't have one yet? <a href="#">Sign up</a> for an account.</p>
      </div>
      <center><button className="close-project-modal" onClick={() => props.followProjectClicked()}>Close</button></center>
    </div>
  </div>
)

export default FollowProjectModal;