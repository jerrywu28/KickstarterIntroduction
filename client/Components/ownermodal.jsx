import React from 'react';

const OwnerModal = props => (
  <div>
    <div className="owner-modal">
      <div className="owner-modal-box">
      <button className="close-project-modal" onClick={() => props.ownerClicked()}>&times;</button>
      <center><h4>About the creator</h4></center>
      <br />
      <h1>{props.owner.name}</h1>
      <h6>{props.player.location}</h6>
      <p className="owner-summary">{props.owner.summary}</p>
      </div>
    </div>
  </div>
)

export default OwnerModal;