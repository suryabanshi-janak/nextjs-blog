import Posts from '@/components/Posts';
import ProfileImage from '@/components/ProfileImage';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <ProfileImage />
      <p className='my-12 text-center text-3xl dark:text-white'>
        Hello and welcome 👋{' '}
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Zanak</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
