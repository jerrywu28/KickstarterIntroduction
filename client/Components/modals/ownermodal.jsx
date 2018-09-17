import React from 'react';
import '../styles/ownermodal.css';

const OwnerModal = props => (
  <div>
    <div className="owner-modal">
      <button className="close-project-modal x-button" onClick={() => props.ownerClicked()}>&times;</button>
      <div className="owner-modal-display">
      <center><h4>About the creator</h4></center>
      <br />
      <h1>{props.owner.name}</h1>
      <h6>{props.player.location}</h6>
      <p className="owner-summary">{props.owner.summary}</p>
      </div>
      <center><button className="close-project-modal close-button" onClick={() => props.ownerClicked()}>close</button></center>
    </div>
  </div>
)

export default OwnerModal;