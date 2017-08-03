import React, { Component } from 'react';
import './App.css';
import GameBoard from './Components/GameBoard'
import GameLogic from './Components/GameLogic'

class App extends Component {
  constructor() {
    super();
    this.GameBoard = GameBoard.bind(this);

    this.state = {
      spaceState: {1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null, 8:null, 9:null},
      player: null,
    }
  }
  render() {
    return (
      <div className="App">
        <GameBoard
          xoState={this.state.spaceState}
        />
        <GameLogic />
      </div>
    );
  }
}

export default App;
