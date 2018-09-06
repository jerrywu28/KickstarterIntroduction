import Header from './header.jsx';
import Player from './player.jsx';
import Status from './status.jsx';

class Introduction extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id="navigation-bar">
        </div>
        <div id="header">
          <Header />
        </div>
        <div className="player-and-status-container">
          <Player /><Status />
        </div>
      </div>
    )
  }
}

export default Introduction

ReactDOM.render(<Introduction />, document.getElementById('introduction'));