import React, { Component } from 'react';
import './App.css';
import GameBoard from './Components/GameBoard'
import GameLogic from './Components/GameLogic'

class App extends Component {
  constructor() {
    super();
    this.makeMove = this.makeMove.bind(this);

    this.state = {
      spaceState: {
        1:null,
        2:null,
        3:null,
        4:null,
        5:null,
        6:null,
        7:null,
        8:null,
        9:null
      },
      player: null,
    }
  }

  makeMove(e, squareNum, marker){
    e.preventDefault();
    let spaceState = {...this.state.spaceState};
    spaceState[squareNum] = marker;
    this.setState({spaceState})
  }

  render() {
    return (
      <div className="App">
        <GameBoard
          xoState={this.state.spaceState}
          makeMove={this.makeMove}
        />
        <GameLogic
        />
      </div>
    );
  }
}

export default App;
