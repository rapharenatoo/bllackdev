import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='h-14 w-full flex items-center justify-center bg-gray-950'>
      <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
        Copyright Notice
        <FaRegCopyright className='text-violet-500' size={14} />
        2021
        <strong className='font-medium'>Bllackdev LTDA</strong>
      </span>
    </footer>
  );
};
