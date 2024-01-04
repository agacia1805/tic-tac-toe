import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className='mx-auto grid w-full scroll-m-[20vh] overflow-x-clip p-5 lg:px-10 lg:px-10'>
      <Link href='/' className='flex items-center' passHref>
        <div className='flex items-center justify-center gap-2 space-x-4 px-4 md:px-0'>
          <div className='relative flex items-center justify-center'>
            <span className='block h-12 w-3 rotate-45 transform bg-white'></span>
            <span className='absolute block h-12 w-3 -rotate-45 transform bg-white'></span>
          </div>
          <div className='h-11 w-11 rounded-full border-8 border-white'></div>
          <span className='sr-only'>Tic Tac Toe app homepage</span>
        </div>
      </Link>
    </header>
  );
};
