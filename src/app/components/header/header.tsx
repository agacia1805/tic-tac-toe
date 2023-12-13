import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
    <Link  href="/" className='flex justify-center items-center'>
      <FaXmark size="52" className="glitter-border"/>
        <FaRegCircle size="39" />
      </Link>
    </header>
  );
};
