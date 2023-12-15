import { Button } from '../button';
import { FiX } from 'react-icons/fi';
import { FiCircle } from 'react-icons/fi';
import { FaXmark } from 'react-icons/fa6';

export const MarkPicker = () => {
  return (
    <section className=''>
      <h1 className='text-center text-xl font-semibold uppercase'>
        Pick your mark
      </h1>
      <div className='flex items-center justify-center '>
        <Button className='w-full px-16'>
          <FaXmark size='42' />
        </Button>
        <Button className='w-full px-16'>
          <FiCircle size='42' />
        </Button>
      </div>
    </section>
  );
};
