import { Button } from '../components/button';
import { MarkPicker } from '../components/markPicker';

export const Homepage = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-6 md:w-6/12 '>
      <MarkPicker />
      <section className='flex flex-col items-center justify-center gap-4 md:flex-row'>
        <Button
          className='glitter-border  w-full px-16'
          href='/components/game'
        >
          Play with CPU
        </Button>
        <Button className='glitter-border w-full px-16' href='/components/game'>
          Play with Player
        </Button>
      </section>
    </div>
  );
};
