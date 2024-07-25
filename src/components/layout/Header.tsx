'use client';

import { Group, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import ModeSwitch from '../ModeSwitch';
import { usePathname } from 'next/navigation';
import { Logo } from '@/icons/Logo';
import { RiUserLine } from 'react-icons/ri';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IconType } from 'react-icons/lib';
import Navbar from './Navbar';
import { ConvertLanguageSuspense } from '../ConvertLanguage';

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();
  const isActive = (href: string) => pathname.includes(href);

  type Navigation = {
    label: string;
    href: string;
    icon: IconType;
  };

  const navigation: Navigation[] = [
    { label: 'Home', href: '/home', icon: HiOutlineHomeModern },
    { label: 'About', href: '/about', icon: RiUserLine },
    { label: 'Blog', href: '/blog', icon: LuLayoutDashboard },
  ];

  const items = navigation.map((nav) => (
    <Link
      key={nav.label}
      href={nav.href}
      className={`flex flex-col items-center justify-between text-lg text-baseZero p-1 hover:border-b-2 hover:border-primary hover:rounded-md dark:hover:border-primary
                  ${isActive(nav.href) ? 'bg-primary text-black' : ''}
        `}
    >
      <nav.icon size={32} />
      <span>{nav.label}</span>
    </Link>
  ));

  return (
    <header className="py-2 px-2 sm:h-[100px]">
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ transition: 'rotate-left', duration: 360, timingFunction: 'linear' }}
      >
        <Navbar setClose={close} />
      </Drawer>
      <div className="flex justify-between items-center gap-4">
        <Group className="flex-nowrap">
          <Burger opened={opened} onClick={open} size="sm" className="burger" />
          <Logo />
          <h1 className="text-2xl font-reggae_one">geeky bunny</h1>
        </Group>

        <Group>
          <Group className="header">{items}</Group>
          <Group className="flex flex-nowrap items-center">
            <ModeSwitch />
            <ConvertLanguageSuspense />
          </Group>
        </Group>
      </div>
    </header>
  );
}
