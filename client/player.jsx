const Player = props => (
  <div className="player-box">
    <iframe width="760" height="420" src="https://www.youtube.com/embed/LsBrT6vbQa8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <br />
    <span id="under-player-buttons"><a href=""><i className="fab fa-kickstarter playlink"></i>Project We Love</a><a href=""><i class="far fa-compass playlink"></i>Publishing</a><a href=""><i class="fas fa-map-marker-alt playlink"></i>Brooklyn, NY</a></span>
  </div>
)

export default Player;