import React from 'react';
import '../styles/otherprojectsmodal.css';

const OtherProjectsModal = props => (
  <div>
    <div className="other-projects-modal">
      <button className="close-project-modal x-button" onClick={() => props.otherProjectsClicked()}>&times;</button>
      <div className="other-projects-display">
        <center><h3>Projects created by {props.owner.name}</h3></center><br/>
        <br/>
          <p>
          - This can/will be a list of other projects belonging to the same owner<br/>
          - This will require the database/schema to be re-implemented to make # projects a project array (with ids referencing other projects)<br/>
          - This also means the owner name must be unique and perhaps an id should also be provided to the owner<br/>
          - For now, I am not going to implement this into my FEC
          </p>
      </div>
      <center><button className="close-project-modal close-button" onClick={() => props.otherProjectsClicked()}>Close</button></center>
    </div>
  </div>
)

export default OtherProjectsModal;