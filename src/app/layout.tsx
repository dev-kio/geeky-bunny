import '@mantine/core/styles.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Bai_Jamjuree as Bai, Reggae_One } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';

const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
  title: 'geeky bunny',
  description: 'Portfolio | Elevate your knowledge and gain insights on web design & development',
  keywords: [
    'front end',
    'back end',
    'full stack',
    'web development',
    'web design',
    'education',
    'programming',
    'code',
    'free source',
    'debugging',
    'TypeScript',
    'Next.js',
    'React',
    'JavaScript',
  ],
  authors: [{ name: 'geeky bunny' }],
  creator: 'geeky bunny',
  publisher: 'geeky bunny',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'favicon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export const bai_jamjuree = Bai({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-bai_jamjuree',
});

export const reggae_one = Reggae_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-reggae_one',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${bai_jamjuree.variable} ${reggae_one.variable} 
         flex flex-col w-full min-h-screen mx-auto xl:w-[65%] font-bai_jamjuree bg-baseOne dark:text-white`}
      >
        <ThemeProvider attribute="class">
          <MantineProvider
            theme={{
              colors: {
                neon: [
                  '#edd3de',
                  '#ffcadf',
                  '#fcaac9',
                  '#ff65a0',
                  '#f34d8c',
                  '#ef3c81',
                  '#cd336e',
                  '#ab2357',
                  '#822649',
                  '#690f31',
                ],
              },
            }}
          >
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </MantineProvider>
          <GoogleAnalytics gaId={GA_TAG_ID} />
        </ThemeProvider>
      </body>
    </html>
  );
}
