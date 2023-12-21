import { Button } from '../button';

interface Props {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: Props) => {
  return (
    <div className='grid grid-cols-3 max-w-fit border rounded border-indigo-300'>
      {squares.map((square, i) => (
        <Button key={i} onClick={() => onClick(i)}
        square className="w-24 h-24 md:w-32 md:h-32 border-indigo-300">
          {square}
        </Button>
      ))}
    </div>
  );
};
