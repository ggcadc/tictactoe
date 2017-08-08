import React, {Component} from 'react';
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
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      player: null,
      winner: null,
      turn: null
    }
  }

  resetBoard() {
    this.setState({
      spaceState: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      player: null,
      winner: null,
      turn: null
    });
  }

  makeMove(squareNum, marker) {
    //copy state
    let newState = {
      ...this.state.spaceState
    };
    //invalid move
    if (this.validMove(newState)) {
      return;
    }
    if (!this.state.player) {
      return
    }
    //update state with move then check if winner
    newState[squareNum] = marker;
    this.setState({
      spaceState: newState
    }, () => this.checkWinner());
    //change turns
    this.nextTurn();
  }

  nextTurn() {
    this.setState({
      turn: this.state.turn === 'X'
        ? 'O'
        : 'X'
    }, () => {
      if (this.state.player === this.state.turn) {
        return;
      }
      this.findAiMove();
    })
  }
  //this is dumb AI that will lose almost every time
  findAiMove() {
    //makes sure the board is not full because async state
    let fullboard = Object.keys(this.state.spaceState).reduce((prev, e, obj) => {
      prev += this.state.spaceState[e];
      return prev;
    }, [])
    if (fullboard.length === 9) {
      return;
    }
    //gets an array of the current board state
    let board = Object.keys(this.state.spaceState).map((val, i) => {
      return this.state.spaceState[i]
    }, []);
    //This selects a random move
    let move = Math.floor(Math.random() * 8) + 1;
    //if the square has been taken it runs again
    if (board[move]) {
      this.findAiMove();
      return
    }
    //selects the mark oposite the human player
    let mark = this.state.player === 'O'
      ? 'X'
      : 'O';
    //makes the move
    this.makeMove(move, mark);
  }

  validMove(newState, squareNum) {
    if (newState[squareNum] === 'X' || newState[squareNum] === 'O' || this.state.winner) {
      return true;
    }
    return false;
  }

  checkWinner() {
    //winning game states
    let topRow = this.state.spaceState[1] + this.state.spaceState[2] + this.state.spaceState[3];
    if (typeof topRow === 'string' && topRow.match(/XXX|OOO/)) {
      this.setState({winner: topRow[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let midRow = this.state.spaceState[4] + this.state.spaceState[5] + this.state.spaceState[6];
    if (typeof midRow === 'string' && midRow.match(/XXX|OOO/)) {
      this.setState({winner: midRow[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let bottomRow = this.state.spaceState[7] + this.state.spaceState[8] + this.state.spaceState[9];
    if (typeof bottomRow === 'string' && bottomRow.match(/XXX|OOO/)) {
      this.setState({winner: bottomRow[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let leftCol = this.state.spaceState[1] + this.state.spaceState[4] + this.state.spaceState[7];
    if (typeof leftCol === 'string' && leftCol.match(/XXX|OOO/)) {
      this.setState({winner: leftCol[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let midCol = this.state.spaceState[2] + this.state.spaceState[5] + this.state.spaceState[8];
    if (typeof midCol === 'string' && midCol.match(/XXX|OOO/)) {
      this.setState({winner: midCol[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let rtCol = this.state.spaceState[3] + this.state.spaceState[6] + this.state.spaceState[9];
    if (typeof rtCol === 'string' && rtCol.match(/XXX|OOO/)) {
      this.setState({winner: rtCol[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let diagA = this.state.spaceState[1] + this.state.spaceState[5] + this.state.spaceState[9];
    if (typeof diagA === 'string' && diagA.match(/XXX|OOO/)) {
      this.setState({winner: diagA[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    let diagB = this.state.spaceState[3] + this.state.spaceState[5] + this.state.spaceState[7];
    if (typeof diagB === 'string' && diagB.match(/XXX|OOO/)) {
      this.setState({winner: diagB[1]})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
    //check for full state
    let fullboard = Object.keys(this.state.spaceState).reduce((prev, e, obj) => {
      prev += this.state.spaceState[e];
      return prev;
    }, [])
    if (fullboard.length === 9) {
      this.setState({winner: 'Nobody'})
      setTimeout(() => {this.resetBoard();}, 2000)
      return;
    }
  }

  choosePlayer(pl) {
    this.setState({player: pl, turn: pl})
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <GameSelections
          reset={this.resetBoard.bind(this)} player={this.choosePlayer.bind(this)} playerState={this.state.player}
          winner={this.state.winner}
        />
        <GameBoard xoState={this.state.spaceState} turn={this.state.turn} makeMove={this.makeMove}/>
      </div>
    );
  }
}

export default App;
