'use client';

import Link from 'next/link';
import type { TagType } from '@/types/TagType';
import { ActionIcon, Text } from '@mantine/core';
import MyIcons from '@/icons/MyIcons';
import { usePathname } from 'next/navigation';
import { VscTag } from 'react-icons/vsc';

export default function TagsBar({ lang, tags }: { lang: string; tags: TagType[] }) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.includes(href);
  const isTagged = () => pathname !== '/blog';

  return (
    <div className="bg-baseTwo mx-auto min-w-fit max-w-fit h-fit shadow-xl dark:shadow-lg dark:shadow-black">
      <ul className="mx-2 p-4">
        <li className="flex items-center justify-center">
          <Link
            href={lang !== '' ? `/blog${lang}` : '/blog'}
            className={`flex gap-2 w-full justify-center mb-2 ${isTagged() ? 'border-b-2 border-primary dark:border-none' : ''}`}
          >
            <ActionIcon variant="transparent">
              <VscTag
                size={28}
                className={`text-baseZero ${isTagged() ? 'dark:text-primary' : ''}`}
              />
            </ActionIcon>
            <Text
              className={`text-xl italic text-baseZero ${isTagged() ? 'dark:text-primary' : ''}`}
            >
              TAGS
            </Text>
          </Link>
        </li>
        {tags.map(({ name, id }: { name: string; id: string }) => (
          <li key={id}>
            <Link href={`/blog/tags/${id}${lang}`}>
              <p
                className={`flex text-sm text-baseZero items-center gap-4 my-1 justify-between hover:bg-primaryTwo dark:hover:bg-primaryFour ${
                  isActive(`/tags/${id}`) ? 'bg-primary text-black' : ''
                } `}
              >
                <MyIcons iconName={name} />
                {name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
