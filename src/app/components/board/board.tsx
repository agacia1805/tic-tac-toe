import { Button } from '../button';

interface Props {
  squares: (string | null)[];
  onClick: () => void;
}

export const Board = ({ squares, onClick }: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {squares.map((square, i) => (
        <Button key={i} onClick={() => onClick(i)} square className="w-12 h-12">
          {square}
        </Button>
      ))}
    </div>
  );
};
