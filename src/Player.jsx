import React from 'react'


class Player extends React.Component
{
    constructor(props) {
      super(props);
    }
    render()
    {
      return(
      <div className="player">
        <div>
          <h2>Player {this.props.playerNumber}</h2>
          <h4>Name: {this.props.playerName}</h4>
          <h4>Played number of times: {this.props.playedTimes}</h4>
        </div>
        <button disabled={this.props.buttonDisabled} onClick={(e) =>{e.persist(); this.props.toggleButtons(e)} }>{this.props.buttonContent}</button>
      </div>
      );
    }
}

export default Player