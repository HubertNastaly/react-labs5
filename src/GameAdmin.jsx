import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { playerOneName: "", playerTwoName: "", playedTimesOne: 0, playedTimesTwo: 0, playerOneDisabled: 0}
    this.playerOneContent = "Play";
    this.playerTwoContent = "This user is playing now";
    this.changeName = this.changeName.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
  }
  changeName(e,player)
  {
    if(player == 1)
    {
      this.setState({playerOneName: e.target.value});
    }
    else
    {
      this.setState({playerTwoName: e.target.value});
    }
  }
  toggleButtons(event)
  {
      //swapping texts
      this.playerOneContent = [this.playerTwoContent, this.playerTwoContent=this.playerOneContent][0];

      //updating played times
      if(this.state.playerOneDisabled)
      {
        this.setState((prevState, props) => ({playedTimesTwo: prevState.playedTimesTwo + 1}));
      }
      else
      {
        this.setState((prevState, props) => ({playedTimesOne: prevState.playedTimesOne + 1}));
      }

      //swapping disable attribute
      this.setState((prevState,props) => ({playerOneDisabled: prevState.playerOneDisabled ^ 1}));
  }
  render()
  {
    return(
      <div className="gameAdmin">
        <Player playerNumber="One" playerName= {this.state.playerOneName} playedTimes={this.state.playedTimesOne} 
        toggleButtons={this.toggleButtons} buttonContent={this.playerOneContent} buttonDisabled={this.state.playerOneDisabled}/>
        <Player playerNumber="Two" playerName= {this.state.playerTwoName} playedTimes={this.state.playedTimesTwo}
         toggleButtons={this.toggleButtons} buttonContent={this.playerTwoContent} buttonDisabled={!this.state.playerOneDisabled}/>
        <br></br>
        <form>
          <label>Set name of Player One</label> 
          <input type="text" onChange={(e) => this.changeName(e,1)}></input>
        </form>
        <br></br>
        <form>
          <label>Set name of Player Two</label> 
          <input type="text" onChange={(e) => this.changeName(e,2)}></input>
        </form>
      </div>
    );
  }
}

export default GameAdmin