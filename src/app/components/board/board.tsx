import { Button } from '../button';
import { XIcon } from '../xIcon';
import { OIcon } from '../oIcon';

interface Props {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: Props) => {
  return (
    <div className='grid max-w-fit grid-cols-3 rounded border border-2 border-indigo-300 shadow-lg'>
      {squares.map((square, i) => (
        <Button
          key={i}
          onClick={() => onClick(i)}
          disabled={!!square?.length}
          square
          name='game-board button'
          className='flex h-24 w-24 items-center justify-center border-2 border-indigo-300 md:h-32 md:w-32'
        >
          {square === 'X' ? (
            <XIcon variant='small' />
          ) : square === 'O' ? (
            <OIcon variant='small' />
          ) : null}
        </Button>
      ))}
    </div>
  );
};
