import { BoardState, SquareValue } from '@/app/types';
import { useState } from 'react';
import { areMovesLeft, hasEnoughMarks } from '@/app/utils';

export const useGame = () => {
  const [squares, setSquares] = useState<BoardState>(Array(9).fill(null));

  const makeRandomMove = (board: BoardState) => {
    const availableMoves = board
      .map((square: SquareValue, index: number) =>
        square === null ? index : null
      )
      .filter((index): index is number => index !== null);

    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      board[availableMoves[randomIndex]] = 'O';
      setSquares([...board]);
    }
  };

  const checkWinner = (board: BoardState): SquareValue => {
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

  const evaluateBoard = (board: BoardState): number => {
    const winner = checkWinner(board);
    if (winner === 'O') {
      return +10;
    } else if (winner === 'X') {
      return -10;
    }
    return 0;
  };

  const minimax = (
    board: BoardState,
    depth: number,
    isMax: boolean
  ): number => {
    const score = evaluateBoard(board);

    if (score === 10) {
      return score;
    }
    if (score === -10) {
      return score;
    }
    if (!areMovesLeft(board)) {
      return 0;
    }

    if (isMax) {
      let best = -Infinity;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          best = Math.max(best, minimax(board, depth + 1, !isMax));
          board[i] = null;
        }
      }
      return best;
    } else {
      let best = Infinity;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          best = Math.min(best, minimax(board, depth + 1, !isMax));
          board[i] = null;
        }
      }
      return best;
    }
  };

  const findBestMove = (board: BoardState): number => {
    let bestVal = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        let moveVal = minimax(board, 0, false);
        board[i] = null;

        if (moveVal > bestVal) {
          bestVal = moveVal;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const makeComputerMove = (newSquares: BoardState) => {
    const randomMoveChance = 0.25;

    if (Math.random() < randomMoveChance) {
      makeRandomMove(newSquares);
    } else {
      const bestMove = findBestMove(newSquares);
      if (bestMove !== -1) {
        newSquares[bestMove] = 'O';
        setSquares([...newSquares]);
      }
    }
  };

  const determineWinner = (board: BoardState): SquareValue => {
    if (!hasEnoughMarks(squares)) {
      return null;
    }
    return checkWinner(board);
  };

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    if (newSquares[i] || checkWinner(newSquares)) {
      return;
    }
    newSquares[i] = 'X';
    setSquares(newSquares);
    if (!checkWinner(newSquares)) {
      makeComputerMove(newSquares);
    }
  };

  return {
    handleClick,
    squares,
  };
};
