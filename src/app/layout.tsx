import Navbar from '@/components/navbar';
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wooooo',
  description: 'Im messing around with next13.3 wooo',
};

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-zinc-200 text-zinc-700 flex flex-col h-screen w-full grow'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
