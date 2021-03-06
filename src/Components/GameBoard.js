import React, {Component} from 'react';
import GameSelections from './GameSelections';

class GameBoard extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className='game-board'>
        <div className='board'>
          <div className='square' id='1'>{this.props.xoState[1]
              ? this.props.xoState[1]
              : <button onClick={(e) => this.props.makeMove(1, this.props.turn)}></button>}
          </div>
          <div className='square' id='2'>{this.props.xoState[2]
              ? this.props.xoState[2]
              : <button onClick={(e) => this.props.makeMove(2, this.props.turn)}></button>}
          </div>
          <div className='square' id='3'>{this.props.xoState[3]
              ? this.props.xoState[3]
              : <button onClick={(e) => this.props.makeMove(3, this.props.turn)}></button>}
          </div>
        </div>
        <div className='board'>
          <div className='square' id='4'>{this.props.xoState[4]
              ? this.props.xoState[4]
              : <button onClick={(e) => this.props.makeMove(4, this.props.turn)}></button>}
          </div>
          <div className='square' id='5'>{this.props.xoState[5]
              ? this.props.xoState[5]
              : <button onClick={(e) => this.props.makeMove(5, this.props.turn)}></button>}
          </div>
          <div className='square' id='6'>{this.props.xoState[6]
              ? this.props.xoState[6]
              : <button onClick={(e) => this.props.makeMove(6, this.props.turn)}></button>}
          </div>
        </div>
        <div className='board'>
          <div className='square' id='7'>{this.props.xoState[7]
              ? this.props.xoState[7]
              : <button onClick={(e) => this.props.makeMove(7, this.props.turn)}></button>}
          </div>
          <div className='square' id='8'>{this.props.xoState[8]
              ? this.props.xoState[8]
              : <button onClick={(e) => this.props.makeMove(8, this.props.turn)}></button>}
          </div>
          <div className='square' id='9'>{this.props.xoState[9]
              ? this.props.xoState[9]
              : <button onClick={(e) => this.props.makeMove(9, this.props.turn)}></button>}
          </div>
        </div>

      </div>
    )
  }
}

export default GameBoard;
