import React, { Component } from 'react';
import './App.css';
import GameBoard from './Components/GameBoard'
import GameSelections from './Components/GameSelections'

class App extends Component {
  constructor() {
    super();
    this.makeMove = this.makeMove.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.makeMove = this.makeMove.bind(this)

    this.state = {
      spaceState: {
        1:null,2:null,3:null,
        4:null,5:null,6:null,
        7:null,8:null,9:null
      },
      player: null,
      winner: null,
      turn: 'X',
    }
  }

  resetBoard(){
    this.setState({
      spaceState: {
        1:'',2:'',3:'',
        4:'',5:'',6:'',
        7:'',8:'',9:''
      },
      player: null,
      winner: null,
      turn: 'X',
    });
  }

  makeMove(e, squareNum, marker){
    e.preventDefault();
    //copy state
    let newState = {...this.state.spaceState};
    //invalid move
    if(newState[squareNum] === 'X' || newState[squareNum] === 'O'){
      return;
    }
    //update state with move then check if winning
    newState[squareNum] = marker;
    this.setState({spaceState: newState}, () => this.checkWinner());
    //change turns
    this.setState({turn: this.state.turn === 'X' ? 'O' : 'X'});

  }

  choosePlayer(pl){
    this.setState({turn: pl})
  }

  checkWinner(){

    //winning game states
    let topRow = this.state.spaceState[1] + this.state.spaceState[2] + this.state.spaceState[3];
    if(typeof topRow === 'string' && topRow.match(/XXX|OOO/)){
      this.setState({winner: topRow[1]})
      return;
    }
    let midRow = this.state.spaceState[4] + this.state.spaceState[5] + this.state.spaceState[6];
    if(typeof midRow === 'string' && midRow.match(/XXX|OOO/)){
      this.setState({winner: midRow[1]})
      return;
    }
    let bottomRow = this.state.spaceState[1] + this.state.spaceState[2] + this.state.spaceState[3];
    if(typeof bottomRow === 'string' && bottomRow.match(/XXX|OOO/)){
      this.setState({winner: bottomRow[1]})
      return;
    }
    let leftCol = this.state.spaceState[1] + this.state.spaceState[4] + this.state.spaceState[7];
    if(typeof leftCol === 'string' && leftCol.match(/XXX|OOO/)){
      this.setState({winner: leftCol[1]})
      return;
    }
    let midCol = this.state.spaceState[3] + this.state.spaceState[5] + this.state.spaceState[8];
    if(typeof midCol === 'string' && midCol.match(/XXX|OOO/)){
      this.setState({winner: midCol[1]})
      return;
    }
    let rtCol = this.state.spaceState[3] + this.state.spaceState[6] + this.state.spaceState[9];
    if(typeof rtCol === 'string' && rtCol.match(/XXX|OOO/)){
      this.setState({winner: rtCol[1]})
      return;
    }
    let diagA = this.state.spaceState[1] + this.state.spaceState[5] + this.state.spaceState[9];
    if(typeof diagA === 'string' && diagA.match(/XXX|OOO/)){
      this.setState({winner: diagA[1]})
      return;
    }
    let diagB = this.state.spaceState[3] + this.state.spaceState[5] + this.state.spaceState[7];
    if(typeof diagB === 'string' && diagB.match(/XXX|OOO/)){
      this.setState({winner: diagB[1]})
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <GameBoard
          xoState={this.state.spaceState}
          turn={this.state.turn}
          makeMove={this.makeMove}
        />
        <GameSelections
          reset={this.resetBoard.bind(this)}
          player={this.choosePlayer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
