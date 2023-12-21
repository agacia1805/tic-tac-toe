'use client';
import { useState } from 'react';
import { Board } from '../board';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
    console.log('clicked')
  };

  const hasEnoughMarks = (array: string[]): boolean => {
    return array.filter((str) => str !== null).length > 4;
  };

  type SquareValue = 'X' | 'O' | null;
  type BoardState = SquareValue[];

  const determineWinner = (board: BoardState): SquareValue => {
    if (!hasEnoughMarks(squares)) return null;
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return <div className="p-4 flex justify-center items-center">
  <Board squares={squares} onClick={handleClick}/> </div>;
}
