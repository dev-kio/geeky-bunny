import { Group } from '@mantine/core';
import { Logo } from '@/icons/Logo';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiUserLine } from 'react-icons/ri';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar({ setClose }: { setClose: Function }) {
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
      className={`flex text-baseZero gap-2 text-lg items-center p-2 hover:border-b-2 hover:border-primary hover:rounded-md
                  ${isActive(nav.href) ? 'bg-primary text-black' : ''}
        `}
      onClick={() => setClose()}
    >
      <nav.icon size={32} />
      <span>{nav.label}</span>
    </Link>
  ));

  return (
    <div className="font-bai_jamjuree flex flex-col h-screen w-full justify-between text-baseZero">
      <nav>
        <Group className="pb-2 mb-2 justify-between">
          <Group>
            {/* <LogoLabel /> */}
            <Logo />
            <h1 className="text-2xl font-reggae_one">geeky bunny</h1>
          </Group>
        </Group>
        {items}
      </nav>
    </div>
  );
}
