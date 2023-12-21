import { Button } from '../button';

interface Props {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: Props) => {
  return (
    <div className='grid max-w-fit grid-cols-3 rounded border border-indigo-300'>
      {squares.map((square, i) => (
        <Button
          key={i}
          onClick={() => onClick(i)}
          disabled={square?.length}
          square
          className='h-24 w-24 border-indigo-300 md:h-32 md:w-32'
        >
          {square}
        </Button>
      ))}
    </div>
  );
};
