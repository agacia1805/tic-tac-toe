'use client';

import { Board } from '../board';
import { GameResult } from '../gameResult';
import { useGame } from '@/app/hooks/useGame';

export default function Game() {
  const { handleClick, squares, gameStatus } = useGame();
  return (
    <div className='flex items-center justify-center p-4'>
      <Board squares={squares} onClick={handleClick}/>
      {gameStatus && <GameResult gameStatus={gameStatus} />}
    </div>
  );
}
