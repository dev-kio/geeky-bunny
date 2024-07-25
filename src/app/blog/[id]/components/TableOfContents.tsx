'use client';

import { Text, Group, Anchor } from '@mantine/core';
import Link from 'next/link';
import { SlPaperClip } from 'react-icons/sl';

type TocType = {
  tag: string;
  label: string;
  href: string;
};

export default function TableOfContents({ toc }: { toc: TocType[] }) {
  const items = toc.map((item, index) => (
    <Link
      key={index}
      href={item.href}
      className={`${
        item.tag === 'h4' ? 'ml-2 pl-2' : item.tag === 'h5' ? 'ml-4 pl-4' : ''
      } flex text-baseZero hover:bg-primaryTwo dark:hover:bg-primaryFour my-2`}
    >
      ・{item.label}
    </Link>
  ));

  return (
    <div className="flex flex-col text-wrap p-4 text-baseZero bg-baseTwo shadow-lg dark:shadow-lg dark:shadow-black">
      <Group className="flex-nowrap py-2">
        <SlPaperClip size={28} />
        <Text className="text-xl italic">Contents</Text>
      </Group>
      <div>{items}</div>
    </div>
  );
}
