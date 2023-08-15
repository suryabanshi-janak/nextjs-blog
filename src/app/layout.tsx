import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Zanak's blog",
  description: 'Created by Zanak',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn('dark:bg-slate-800', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
