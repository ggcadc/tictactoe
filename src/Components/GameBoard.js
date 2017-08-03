import React, { Component } from 'react';
import GameLogic from './GameLogic';

class GameBoard extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <div className='game-board'>
        <div className='board'>
          <div className='square' id='1'>{this.props.xoState[1]}</div>
          <div className='square' id='2'>{this.props.xoState[2]}</div>
          <div className='square' id='3'>{this.props.xoState[3]}</div>
        </div>
        <div className='board'>
          <div className='square' id='4'>{this.props.xoState[4]}</div>
          <div className='square' id='5'>{this.props.xoState[5]}</div>
          <div className='square' id='6'>{this.props.xoState[6]}</div>
        </div>
        <div className='board'>
          <div className='square' id='7'>{this.props.xoState[7]}</div>
          <div className='square' id='8'>{this.props.xoState[8]}</div>
          <div className='square' id='9'>{this.props.xoState[9]}</div>
        </div>

      </div>
    )
  }
}

export default GameBoard;
