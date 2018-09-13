import React from 'react';

const Header = props => (
  <div className="header-container">
    <div className="header-owner">
        <h1><img className="avatar" src={props.owner.avatar}></img></h1>
        <div id="author"><a className="black-link" href="">By {props.owner.name}</a><br />
        <a className="gray-link" href="">{props.owner.numProjects} created</a></div>
    </div>
    <div className="header-title">
        <h1>{props.project.name}</h1>
        <h3 id="project-tagline">{props.project.summary}</h3>
    </div>
  </div>
)

export default Header