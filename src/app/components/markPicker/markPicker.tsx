'use client';

import { Button } from '../button';
import { useGameMark } from '../../context';
import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export const MarkPicker = () => {
  const { gameMark, setGameMark } = useGameMark();
  const isXSelected = gameMark === 'X';

  return (
    <section className='flex flex-col items-center gap-24'>
      <h1 className='glitter-text text-center text-3xl font-bold uppercase md:text-4xl '>
        Pick your mark
      </h1>
      <div className='flex max-w-max items-center justify-center'>
        <Button
          className='rounded-sm border-none px-16'
          name='X mark'
          onClick={() => setGameMark('X')}
        >
          <motion.div
            className='flex items-center justify-center p-4'
            animate={isXSelected ? 'selected' : 'unselected'}
            variants={{
              selected: { scale: 1.2, opacity: 1 },
              unselected: { scale: 1, opacity: 0.5 },
            }}
            transition={spring}
          >
            <div className='relative flex w-20 items-center justify-center'>
              <span className='block h-28 w-4 rotate-45 transform bg-white'></span>
              <span className='absolute block h-28 w-4 -rotate-45 transform bg-white'></span>
            </div>
          </motion.div>
        </Button>
        <Button
          className='rounded-sm border-none px-16'
          name='O mark'
          onClick={() => setGameMark('O')}
        >
          <motion.div
            className={`h-24 w-24 rounded-full border-8 border-white ${
              !isXSelected && 'border-current'
            }`}
            animate={!isXSelected ? 'selected' : 'unselected'}
            variants={{
              selected: { scale: 1.3, opacity: 1 },
              unselected: { scale: 1, opacity: 0.5 },
            }}
            transition={spring}
          ></motion.div>
        </Button>
      </div>
    </section>
  );
};
