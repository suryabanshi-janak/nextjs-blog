import Image from 'next/image';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='my-12 text-center text-3xl dark:text-white'>
        Hello and welcome 👋{' '}
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Janak</span>
        </span>
      </p>
    </main>
  );
}
