import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchClicked: false,
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

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