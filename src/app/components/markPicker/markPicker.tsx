'use client';

import { Button } from '../button';
import { XIcon } from '../xIcon';
import { OIcon } from '../oIcon';
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
          className='rounded-sm border-none px-5 py-2.5'
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
            <XIcon />
          </motion.div>
        </Button>
        <Button
          className='rounded-sm border-none px-5 py-2.5'
          name='O mark'
          onClick={() => setGameMark('O')}
        >
          <motion.div
            animate={!isXSelected ? 'selected' : 'unselected'}
            className='flex items-center justify-center p-2'
            variants={{
              selected: { scale: 1.3, opacity: 1 },
              unselected: { scale: 1, opacity: 0.5 },
            }}
            transition={spring}
          >
            <OIcon />
          </motion.div>
        </Button>
      </div>
    </section>
  );
};
