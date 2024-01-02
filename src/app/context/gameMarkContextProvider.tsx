'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type GameMarkContextType = {
  gameMark: 'X' | 'O';
  setGameMark: (newValue: string) => void;
};

const GameMarkContext = createContext<GameMarkContextType>({
  gameMark: 'X',
  setGameMark: () => {},
});

export const GameMarkContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameMark, setGameMark] = useLocalStorage<string>('gameMark', 'X');

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
