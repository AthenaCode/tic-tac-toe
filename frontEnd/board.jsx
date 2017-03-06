//visualization of Board

//[0, 0, 0]
//[0, 0, 0]
//[0, 0, 0]


import { Component } from 'react';

class Squares extends Component{
	render(){
		return(){
			<div className = "squares"></div>
		}
	}
}

class Board extends Component{
	render(){
		//create a function to check whether or not one of the squares has been clicked
		//temp assume that it works and call is checkSquare
		checkSquare(i);
		return(){
			//Show who's turn it is
			<div className = "turn">{turn}</div>
			<div className = "currentBoard">

				<div className = "row">
					{this.checkSquare(0)}
					{this.checkSquare(1)}
					{this.checkSquare(2)}
				</div>
				<div className = "row">
					{this.checkSquare(3)}
					{this.checkSquare(4)}
					{this.checkSquare(5)}
				</div>
				<div className = "row">
					{this.checkSquare(6)}
					{this.checkSquare(7)}
					{this.checkSquare(8)}
				</div>
			}

		}
	}

