import Link from 'next/link';
import PostItem from '@/components/PostItem';
import { getPostsMeta } from '@/lib/posts';

type Props = {
  params: { tag: string };
};

export async function generateMetaData({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts available.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className='text-3xl mt-4 mb-0'>Results for: #{tag}</h2>
      <section className='mt-6 mx-auto max-w-2xl'>
        <ul className='w-full list-none p-0'>
          {tagPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
