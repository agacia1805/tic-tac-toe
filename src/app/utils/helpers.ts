import { BoardState } from '@/app/types';

export const hasEnoughMarks = (array: BoardState): boolean => {
  return array.filter((item) => item !== null).length > 4;
};

export const areMovesLeft = (board: BoardState): boolean => {
  return board.some((square) => square === null);
};
