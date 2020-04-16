import React from 'react';
import Board from './board';
// import Tile from '../minesweeper.js';
// import Board from '../minesweeper.js';
import * as Minesweeper from '../minesweeper.js';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(9, 10)
        }
        this.updateGame = this.updateGame.bind(this);
    }

    render() {
        return (
            <Board board = {this.state.board} updateGame={this.updateGame}/>
        )
    }

    updateGame(flagged){

    }
}

export default Game;