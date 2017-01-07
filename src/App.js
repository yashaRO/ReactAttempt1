import React, { Component } from 'react';
import Square from './Components/Square'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            squares:Array(9).fill(null),
            winning:Array(9).fill(null),
            xIsNext:true
        }
    }
    checkWinner(squares) {
        const winning = this.state.winning.slice()
        var variations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]            
        ];
        for(let i = 0; i < variations.length; i++) {
            let [a,b,c] = variations[i];
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                winning[a] = winning[b] = winning[c] = true;
                this.setState({winning:winning})
                return true;
            }
        }
        return null;
    }
    handleClick(i) {
        const squares = this.state.squares.slice()
        if (this.checkWinner(this.state.squares) || squares[i]) {return}
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.checkWinner(squares)
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }
    
    renderSquare(i) {
        return <Square value={this.state.squares[i]} style={{backgroundColor: this.state.winning[i] ? '#d07b6d' : false}} onClick={() => this.handleClick(i)} />
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>       
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default App;
