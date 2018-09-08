const NavBar = props => {
  return (
    <div className="main-navigation-bar">
      <div id="nav-bar-1"><a className="black-link" href="">Explore</a>
      <div id="start-project"><a className="black-link"href="">Start a project</a></div></div>
      <div id="nav-bar-2"><img src="https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-color.png" height="18.9375" width="185"></img></div>
      <a className="black-link" onClick={() => console.log('search clicked')}>Search <i className="fas fa-search"></i></a>
      <div id="nav-bar-3"><a className="black-link" href="">Sign in</a></div>
    </div>
  )
}

export default NavBar;