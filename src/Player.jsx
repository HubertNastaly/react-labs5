import React from 'react'


function Player(props)
{
    return (
      <div class="player">
        <div>
          <h2>Player {props.playerNumber}</h2>
          <h4>Name: {props.playerName}</h4>
          <h4>Played number of times: {props.playedTimes}</h4>
        </div>
        <button onClick={(e) => props.toggleButtons(e)}>Player</button>
      </div>
    );
}

export default Player