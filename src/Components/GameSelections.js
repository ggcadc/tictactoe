import React, {Component} from 'react';
// import GameBoard from './GameBoard';

class GameSelections extends Component {

  render() {
    return (
      <div>
        <p className={this.props.playerState
          ? 'hidden'
          : 'visible'}>choose
          <button className='visible' onClick={() => this.props.player('X')}>X</button>
          or
          <button className='visible' onClick={() => this.props.player('O')}>O</button>
        </p>
        <button className='visible' onClick={this.props.reset}>reset</button>
        <div className={this.props.winner?'visible':'hidden'}>
          <p>{this.props.winner} wins!</p>
        </div>
      </div>
    )
  }
}

export default GameSelections;
