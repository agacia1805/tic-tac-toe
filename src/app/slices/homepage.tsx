import { Button } from '../components/button';
import { MarkPicker } from '../components/markPicker';

export const Homepage = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-32 px-4 md:w-6/12'>
      <MarkPicker />
      <section className='flex flex-col items-center justify-center gap-4 md:flex-row'>
        <Button
          className='glitter-border w-full px-16'
          href='/components/game'
          name='Start a game'
        >
          Start a game
        </Button>
      </section>
    </div>
  );
};
