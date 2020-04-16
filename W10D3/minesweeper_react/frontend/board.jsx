import React from 'react';
import Tile from './tile'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.updateGame = props.updateGame.bind(this);
        this.render = this.render.bind(this);
    }
    render(){
        { console.log("first ", this.props.board.grid[0][0])}
        
        return(
            <div className="board">
                {this.renderGrid()}
                
            </div>
        )
    }

    renderTile(row, col){
        return <div className="tile"><Tile tile={this.props.board.grid[row][col]} key={`${row}, ${col}`} updateGame={this.updateGame}/> </div>
    }

    renderRow(row){
        let grid = this.props.board.grid;
        let tiles = [];
        for(let i = 0; i < grid[row].length; i++){
            tiles.push(this.renderTile(row, i))
        }
        
        //console.log(tiles);
        return <div className="row">{tiles}</div>;
    }

    renderGrid(){
        let grid = this.props.board.grid;
        let tiles = [];
        for(let i = 0; i < grid.length; i++){
            tiles.push(this.renderRow(i));
            // tiles.push(<br/>);
        }
        return tiles;
    }


}

export default Board

//in minesweeper.js -> Board(gridsize, numbombs)
//call generate board before mapping
//Board.grid is an array (that we'll map)