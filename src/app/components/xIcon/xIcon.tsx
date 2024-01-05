export const XIcon = ({ variant }: { variant?: 'small' }) => {
  return (
    <div className='relative flex w-20 items-center justify-center'>
      <span
        className={`block ${
          variant ? 'h-16 w-3' : 'h-28 w-4'
        } rotate-45 transform bg-white`}
      ></span>
      <span
        className={`absolute block ${
          variant ? 'h-16 w-3' : 'h-28 w-4'
        } -rotate-45 transform bg-white`}
      ></span>
    </div>
  );
};
