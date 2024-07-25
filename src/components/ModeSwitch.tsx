'use client';

import { ActionIcon, MantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { RxMoon } from 'react-icons/rx';
import { CgSun } from 'react-icons/cg';
import { useMantineColorScheme } from '@mantine/core';
import { useTheme } from 'next-themes';

export default function ModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setColorScheme(resolvedTheme as MantineColorScheme);
  }, []);

  const setLight = () => {
    setTheme('light');
    // clearColorScheme();
    setColorScheme('light');
  };
  const setDark = () => {
    setTheme('dark');
    setColorScheme('dark');
  };
  if (!mounted) {
    return null;
  }

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <ActionIcon
          size="lg"
          onClick={setLight}
          className="text-baseZero  bg-baseTwo border-1 border-baseThree rounded-md hover:bg-primaryFour"
        >
          <RxMoon size={28} />
        </ActionIcon>
      ) : (
        <ActionIcon
          size="lg"
          onClick={setDark}
          className="text-baseZero bg-baseTwo rounded-md hover:bg-primaryTwo hover:text-baseThree"
        >
          <CgSun size={28} />
        </ActionIcon>
      )}
    </div>
  );
}
