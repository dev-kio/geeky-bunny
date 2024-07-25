import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'geeky bunny | Home',
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
