import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'geeky bunny | About',
};

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
