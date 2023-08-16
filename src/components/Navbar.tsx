import Link from 'next/link';
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Janak Suryabanshi
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle items-center gap-4 text-white text-xl lg:text-2xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.youtube.com'
          >
            <FaYoutube />
          </Link>

          <Link
            className='text-white/90 hover:text-white'
            href='https://github.com'
          >
            <FaGithub />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://twitter.com'
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
};
