import { Button } from '../components/button';
import { MarkPicker } from '../components/markPicker';

export const Homepage = () => {
  return (
    <div>

      <MarkPicker />
            <Button className='px-16' href='/components/gameBoard'>
              Test
            </Button>
    </div>
  );
};
