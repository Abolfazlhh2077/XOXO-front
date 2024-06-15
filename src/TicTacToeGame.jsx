

import React, { useState } from 'react';

const TicTacToeGame = ({ user1, user2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result);
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? user1 : user2}`;

  
  
  return (
    <div style={styles.container}>
      <h1>Tic Tac Toe Game</h1>
      <p>{status}</p>
      <div className="board" style={{ display: "grid", gridTemplateRows: "repeat(3, 100px)" }}>
        <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)" }}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)" }}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)" }}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <style>
        {`
          .board {
            display: grid;
            grid-gap: 5px;
          }
  
          .square {
            background-color: #fff;
            border: 1px solid #999;
            font-size: 36px;
            text-align: center;
            cursor: pointer;
          }
  
          .square:hover {
            background-color: #ddd;
          }
        `}
      </style>
    </div>
  );
  
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
};

export default TicTacToeGame;

