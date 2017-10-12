import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* This is Tic Tac Toe game build upon React Framework. 
Developed for explaining main structure and functions of React.
Taken from https://reactjs.org/tutorial/tutorial.html
*/


//Atomic component of game. Each square holds a value.
class Square extends React.Component{
    
    //React components can have state by setting this.state in cosntructor.
    constructor(){
        super();
        this.state = {
            value: null,
        };
    }
    //Change square's state with onClick event.
    render(){
        return(
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

}

class Board extends React.Component {
    //Board stores states of squares in an array.
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    //When a square clicked function changes its state on Board state array
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
      return <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className="board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Game />, document.getElementById('app'));
