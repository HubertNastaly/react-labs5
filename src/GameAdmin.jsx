import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { PlayerOneName: "", PlayerTwoName: "" }
    this.changeNameEventHandler = this.changeNameEventHandler.bind(this);
  }
  changeNameEventHandler(event,player)
  {
    if(player == 1)
    {
      this.setState({PlayerOneName: event.target.value});
    }
    else
    {
      this.setState({PlayerTwoName: event.target.value});
    }
  }
  render()
  {
    return(
      <div class="gameAdmin">
        <Player playerNumber="One" playerName= {this.state.PlayerOneName} playedTimes="0"/>
        <Player playerNumber="Two" playerName= {this.state.PlayerTwoName} playedTimes="0"/>
        <br></br>
        <label>Set name of Player One</label> 
        <input type="text" onChange={(e) => this.changeNameEventHandler(e,1)}></input>
        <br></br>
        <label>Set name of Player Two</label> 
        <input type="text" onChange={(e) => this.changeNameEventHandler(e,2)}></input>
      </div>
    );
  }
}

export default GameAdmin