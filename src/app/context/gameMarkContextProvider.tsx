'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type GameMarkType = 'X' | 'O';

type GameMarkContextType = {
  gameMark: GameMarkType;
  setGameMark: (newValue: GameMarkType) => void;
};

const GameMarkContext = createContext<GameMarkContextType>({
  gameMark: 'X',
  setGameMark: () => {},
});

export const GameMarkContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameMark, setGameMark] = useLocalStorage<GameMarkType>('gameMark', 'X');

  return (
    <GameMarkContext.Provider value={{ gameMark, setGameMark }}>
      {children}
    </GameMarkContext.Provider>
  );
};

export const useGameMark = () => {
  const context = useContext(GameMarkContext);
  if (!context) {
    throw new Error('state setter must be used within an GameMarkContext');
  }
  return context;
};
