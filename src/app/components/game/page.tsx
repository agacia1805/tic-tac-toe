'use client';
import { Board } from '../board';
import { useGame } from '@/app/hooks/useGame';

export default function Game() {
  const { handleClick, squares } = useGame();
  return (
    <div className='flex items-center justify-center p-4'>
      <Board squares={squares} onClick={handleClick} />{' '}
    </div>
  );
}
