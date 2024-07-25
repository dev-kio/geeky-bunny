import { Anchor, Group } from '@mantine/core';
import { IoMdMail } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { Logo } from '@/icons/Logo';
import { Text } from '@mantine/core';
import { RiCopyrightLine } from 'react-icons/ri';
import { TiHeartOutline } from 'react-icons/ti';
import MyIcons from '@/icons/MyIcons';
import Link from 'next/link';

type Navigation = {
  label: string;
  href: string;
};

const navigation: Navigation[] = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Footer() {
  const items = navigation.map((nav) => (
    <Link
      key={nav.label}
      href={nav.href}
      className="text-baseZero text-lg hover:text-primary dark:hover:text-primary"
    >
      {nav.label}
    </Link>
  ));
  const themeColor = 'text-baseZero hover:text-primary dark:hover:text-primary';
  return (
    <div className="flex justify-between items-start gap-4 my-2 p-2 flex-wrap border-t-4 border-primary">
      <Group className="gap-4 justify-start flex-nowrap">
        <Logo />
        <div className="text-baseZero">
          <Text className="flex items-center gap-1 py-2">
            By
            <TiHeartOutline size={28} className="text-primary" /> Kio
          </Text>
          <Text className="flex items-center gap-1 py-2">
            <RiCopyrightLine size={28} /> 2024 <span className="font-reggae_one">geeky bunny</span>
          </Text>
          <Text className="flex flex-wrap items-center gap-1 py-2">
            Build By
            <MyIcons iconName="TypeScript" />
            <MyIcons iconName="Next.js" />
            <MyIcons iconName="Mantine" />
            <MyIcons iconName="Tailwind CSS" />
            <MyIcons iconName="microCMS" />
          </Text>
        </div>
      </Group>

      <Group>{items}</Group>

      <Group className="gap-2">
        <Link href="https://github.com/dev-kio/geeky-bunny">
          <SiGithub size={28} className={themeColor} />
        </Link>
        <Link href="mailto:ewdyoon17@gmail.com">
          <IoMdMail size={28} className={themeColor} />
        </Link>
      </Group>
    </div>
  );
}
