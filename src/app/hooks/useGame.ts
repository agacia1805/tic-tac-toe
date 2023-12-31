import { BoardState, GameStatus, SquareValue } from '@/app/types';
import { useEffect, useState } from 'react';
import { areMovesLeft, hasEnoughMarks } from '@/app/utils';
import { useGameMark } from '../context';

export const useGame = () => {
  const { gameMark } = useGameMark();
  const [squares, setSquares] = useState<BoardState>(Array(9).fill(null));
  const [winner, setWinner] = useState<SquareValue>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus | null>(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const computerMark = gameMark === 'X' ? 'O' : 'X';

  const makeRandomMove = (board: BoardState): number => {
    const availableMoves = board
      .map((square, index) => (square === null ? index : null))
      .filter((index): index is number => index !== null);

    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      board[availableMoves[randomIndex]] = computerMark;
      return availableMoves[randomIndex];
    }
    return -1;
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
    if (winner === computerMark) {
      return +10;
    } else if (winner === gameMark) {
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
          board[i] = computerMark;
          best = Math.max(best, minimax(board, depth + 1, !isMax));
          board[i] = null;
        }
      }
      return best;
    } else {
      let best = Infinity;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = gameMark;
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
        board[i] = computerMark;
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
  const determineWinner = (board: BoardState): SquareValue => {
    if (!hasEnoughMarks(squares)) {
      return null;
    }
    return checkWinner(board);
  };

  const updateGameStatus = (newSquares: BoardState) => {
    const newWinner = determineWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
      setGameStatus(newWinner === gameMark ? 'You won' : 'You lost');
      return true;
    } else if (!areMovesLeft(newSquares)) {
      setGameStatus("It's a tie");
      return true;
    }
    return false;
  };

  const makeComputerMove = (newSquares: BoardState) => {
    setIsPlayerTurn(false);
    const randomMoveChance = 0.2;
    let moveIndex = -1;

    if (Math.random() < randomMoveChance) {
      moveIndex = makeRandomMove(newSquares);
    } else {
      moveIndex = findBestMove(newSquares);
    }

    if (moveIndex !== -1) {
      newSquares[moveIndex] = computerMark;
      setSquares([...newSquares]);
    }
  };

  useEffect(() => {
    const gameEnded = updateGameStatus(squares);
    if (!gameEnded) {
      setIsPlayerTurn(true);
    }
  }, [squares]);

  function debounce<F extends (...args: any[]) => void>(
    func: F,
    waitFor: number
  ): (...args: Parameters<F>) => void {
    let timeout: number | undefined;

    return function (...args: Parameters<F>) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), waitFor);
    };
  }

  const handleClick = debounce((i: number) => {
    const newSquares = squares.slice();
    if (!isPlayerTurn || newSquares[i] || winner) {
      return;
    }
    setIsPlayerTurn(false);
    newSquares[i] = gameMark;
    setSquares(newSquares);

    const gameEnded = updateGameStatus(newSquares);
    if (!gameEnded) {
      const playComputerHandler = setTimeout(() => {
        makeComputerMove(newSquares);
        setIsPlayerTurn(true);
      }, 300);

      return () => {
        clearTimeout(playComputerHandler);
      };
    }
  }, 300);

  return {
    handleClick,
    squares,
    gameStatus,
    isPlayerTurn,
  };
};
