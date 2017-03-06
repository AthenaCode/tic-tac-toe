import { Component } from 'react';

//visualization of Board

//[null, null, null]
//[null, null, null]
//[null, null, null]


class Squares extends Component{
	render(){
		return(){
			<div className="squares"></div>
		}
	}
}

class Board extends Component {	


	checkSquare(item) {
		//check every square when invoked to update game
	  }
	  render() {
	    return (
	      <div>
	        <div className="row">
	          {this.checkSquare(0)}
	          {this.checkSquare(1)}
	          {this.checkSquare(2)}
	        </div>
	        <div className="row">
	          {this.checkSquare(3)}
	          {this.checkSquare(4)}
	          {this.checkSquare(5)}
	        </div>
	        <div className="row">
	          {this.checkSquare(6)}
	          {this.checkSquare(7)}
	          {this.checkSquare(8)}
	        </div>
	      </div>
	    );
	  }
	}	

class Game extends Component {
	render(){
		return(
			<div className="game">
				<Board />	
			</div>
			<div className="board">
			</div>

		)
	}
}