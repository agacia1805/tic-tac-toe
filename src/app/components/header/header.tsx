import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className='mx-auto grid w-full scroll-m-[20vh] grid-cols-12 overflow-x-clip p-5 lg:px-10 lg:px-10'>
      <Link href='/' className='flex items-center justify-center'>
        <FaXmark size='52' />
        <FaRegCircle size='39' />
      </Link>
    </header>
  );
};
