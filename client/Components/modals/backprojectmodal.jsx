import React from 'react';
import '../styles/backprojectmodal.css';

const BackProjectModal = props => (
  <div>
    <div className="back-project-modal">
      <button className="close-project-modal x-button" onClick={() => props.backButtonClicked()}>&times;</button>
      <div className="back-project-form">
        <div className="back-project-form-header">
        <img src="https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-color.png" height="18.9375" width="185"></img>
        </div>
        <div className="back-project-title">
          <h1>{props.project.name}</h1>
          <h5>By {props.owner.name}</h5>
        </div>
        <div className="back-project-form-main">
          <div className="back-project-form-pledges">
            <h3>Support this project</h3>
            <ul className="list-project-pledges">
              <li className="list-project-pledge-item">Pledge/support module can go here</li>
              <li className="list-project-pledge-item">Pledge/support module can go here</li>
              <li className="list-project-pledge-item">Pledge/support module can go here</li>
              <li className="list-project-pledge-item">Pledge/support module can go here</li>
              <li className="list-project-pledge-item">Pledge/support module can go here</li>
            </ul>
          </div>
          <div className="back-project-form-info">
            <h5><b>Kickstarter is not a store.</b></h5>
            <h5>It's a way to bring creative projects to life.</h5>
            <p>Kickstarter does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
            <br />
            <p>Learn more about accountability</p>
            <br />
            <h5>FREQUENTLY ASKED QUESTIONS</h5>
            <ul className="frequently-asked-questions">
            <li className="faq-question">► How do I pledge?</li>
            <li className="faq-question">► When is my card charged?</li>
            <li className="faq-question">► So I'm only charged if funding succeeds?</li>
            <li className="faq-question">► What can others see about my pledge?</li>
            <li className="faq-question">► What if I want to change my pledge?</li>
            <li className="faq-question">► If this project is funded, how do I get my reward?</li>
            </ul>
          </div>
        </div>
      </div>
      <center><button className="close-project-modal close-button" onClick={() => props.backButtonClicked()}>Close</button></center>
    </div>
  </div>
)

export default BackProjectModal;