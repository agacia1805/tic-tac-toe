import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from './components';
import { GameMarkContextProvider } from './context';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tic Tac Toe App',
  description: 'Created by Pinehead Coder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameMarkContextProvider>
      <html lang='en'>
        <body className={`${inter.className} flex min-h-screen flex-col`}>
          <Header />
          <div className='flex flex-grow flex-col justify-center'>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </GameMarkContextProvider>
  );
}
