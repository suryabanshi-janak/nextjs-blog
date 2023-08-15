import fs from 'fs';
import path from 'path';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import matter from 'gray-matter';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}

const postsDirectory = path.join(process.cwd(), 'src/blogposts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
