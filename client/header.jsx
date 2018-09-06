const Header = props => (
  <div className="header-container">
    <div className="header-owner">
    <h1><img src="https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no"></img></h1>
    <h5 id="author"><a href="">By {props.owner.name}</a></h5>
    <h5><a href="">{props.owner.numProjects} created</a></h5>
    </div>
    <div className="header-title">
    <h1>{props.project.name}</h1>
    <h3 id="project-tagline">{props.project.summary}</h3>
    </div>
  </div>
)

export default Header

//img src should also be a {props.imgsrc};