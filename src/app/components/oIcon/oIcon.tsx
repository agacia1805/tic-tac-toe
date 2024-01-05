export const OIcon = ({ variant }: { variant?: 'small' }) => {
  return (
    <div
      className={`${
        variant ? 'h-16 w-16' : 'h-24 w-24'
      } rounded-full border-8 border-white`}
    ></div>
  );
};
