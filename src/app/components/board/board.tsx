import { Button } from '../button';
import { XIcon } from '../xIcon';
import { OIcon } from '../oIcon';
import { motion } from 'framer-motion';

interface Props {
isPlayerTurn: boolean;
  squares: (string | null)[];
  onClick: (i: number) => void;
}

const markAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.2 },
};

export const Board = ({ squares, onClick, isPlayerTurn }: Props) => {
  return (
    <div className='grid max-w-fit grid-cols-3 rounded border border-2 border-indigo-300 shadow-lg'>
      {squares.map((square, i) => (
        <Button
          key={i}
          onClick={() => onClick(i)}
          disabled={!!square?.length}
          square
          disabled={!isPlayerTurn}
          name='game-board button'
          className='flex h-24 w-24 items-center justify-center border-2 border-indigo-300 md:h-32 md:w-32'
        >
          {square === 'X' ? (
            <motion.div {...markAnimation}>
              <XIcon variant='small' />
            </motion.div>
          ) : square === 'O' ? (
            <motion.div {...markAnimation}>
              <OIcon variant='small' />
            </motion.div>
          ) : null}
        </Button>
      ))}
    </div>
  );
};
