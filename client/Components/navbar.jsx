import React from 'react';
import './styles/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClicked: false,
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  //This may be later implemented to turn NavBar into a search bar whenever search is clicked.
  handleSearchClick() {
    this.setState({searchClicked: !this.state.searchClicked});
  }

  render() {
    return (
      <div className="main-navigation-bar">
        <div id="nav-bar-1">
          <a className="black-link" href="#">Explore</a>
          <a className="black-link"href="#">Start a project</a>
        </div>
        <div id="nav-bar-2">
          <img src="https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-color.png" height="18.9375" width="185"></img>
        </div>
        <div id="nav-bar-3">
          <a className="black-link" href="#" onClick={(event) => {
            console.log('Previous searchClicked value: ', this.state.searchClicked);
            this.handleSearchClick();
          }}>Search <i className="fas fa-search"></i></a>
          <a className="black-link" href="#">Sign in</a>
        </div>
      </div>
    )
  }
}

export default NavBar;