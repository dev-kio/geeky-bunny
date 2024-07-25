import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'geeky bunny | Blog',
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
