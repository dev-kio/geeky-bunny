'use client';

import { ActionIcon } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Menu } from '@mantine/core';
import { HiOutlineTranslate } from 'react-icons/hi';
import { Suspense } from 'react';

export const ConvertLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const pushEn = () => {
    router.push(`${pathname}${page ? `?page=${page}` : ''}`);
  };
  const pushJa = () => {
    router.push(`?lang=ja${page ? `&page=${page}` : ''}`);
  };

  if (pathname.includes('/blog') === false) {
    return <></>;
  }

  return (
    <Menu transitionProps={{ transition: 'scale-y', duration: 360 }}>
      <Menu.Target>
        <ActionIcon
          size="lg"
          className="text-baseZero rounded-md hover:bg-primaryTwo hover:text-baseThree bg-baseTwo dark:hover:bg-primaryFour dark:hover:text-white dark:border-1 dark:border-baseThree"
        >
          <HiOutlineTranslate size={28} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown className="bg-baseTwo text-xs border-baseThree dark:border-primary">
        <Menu.Label className="text-baseThree">Choose a language:</Menu.Label>
        <div onClick={pushEn}>
          <Menu.Item className="hover:bg-primaryTwo dark:hover:bg-primaryFour text-baseZero text-sm">
            English
          </Menu.Item>
        </div>
        <div onClick={pushJa}>
          <Menu.Item className="hover:bg-primaryTwo dark:hover:bg-primaryFour text-baseZero text-sm">
            Japanese
          </Menu.Item>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export const ConvertLanguageSuspense = () => {
  return (
    <Suspense>
      <ConvertLanguage />
    </Suspense>
  );
};
