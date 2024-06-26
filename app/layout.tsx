import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-100`}>
        <NavBar />
        <main className='flex w-8/12 items-center justify-center p-10 bg-white rounded-lg mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
