'use client';

import { Text, Container } from '@mantine/core';

export default function Hero() {
  return (
    <div className="flex justify-center bg-neutral-300 dark:bg-baseTwo w-full py-4">
      <Container className="relative p-4 m-4 max-w-fit z-10">
        <h1 className="font-black text-5xl leading-snug md:text-7xl md:leading-relaxed text-baseZero">
          A rookie&apos;s road to
          <br />
          <Text
            component="span"
            inherit
            className="text-primary dark:text-black bg-black dark:bg-primary px-4 text-nowrap"
          >
            DEV GURU
          </Text>
        </h1>

        <Text className="mt-2 text-2xl text-baseThree">
          Gain insights on web development, design, debugging and tooltips.
        </Text>
      </Container>
    </div>
  );
}
