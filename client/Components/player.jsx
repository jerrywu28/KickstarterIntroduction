import React from 'react';

const Player = props => (
  <div className="player-box">
    <iframe width="740" height="440" frameBorder="0" src={props.player.source}></iframe>
    <br />
    <div className="under-player-buttons">
      <a className="gray-link" href="#"><i className="fab fa-kickstarter playlink"></i>Project We Love</a>
      <a className="gray-link" href="#"><i className="far fa-compass playlink"></i>Publishing</a>
      <a className="gray-link" href="#"><i className="fas fa-map-marker-alt playlink"></i>{props.player.location}</a>
    </div>
  </div>
)

export default Player;