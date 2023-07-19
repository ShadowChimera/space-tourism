import './globals.css';
import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow',
});
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow-condensed',
});
const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description:
    'So, you want to travel to Space. Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
