import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import Image from 'next/image';
import { IoMdMail } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';
import { LuCoffee } from 'react-icons/lu';

export default function ProfileCard() {
  const themeColor = 'text-baseZero hover:text-primary dark:hover:text-primary';
  const bio = [
    `Hello, I'm Kio, a rookie in this dev world. I'm here to share information on my journey to becoming a dev guru.`,
    `I can't go a day without coffee. I work out regularly and read before bed.
            My interests include designing, learning piano, and listening to loud music. Oh I'm also a huge cat person (that includes cat snakes aka ferrets).`,
    `While I am currently employed, I constantly seek opportunities for self-improvement in my personal time.
            Please feel free to contact me for job opportunities or collaborative projects. `,
  ];
  return (
    <Card className="flex flex-col shadow-xl dark:shadow-lg dark:shadow-black bg-baseTwo max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/low-poly-grid-haikei.svg" // https://app.haikei.app/
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          alt="Profile Background Image"
          priority={true}
        />
        <Avatar
          alt="Profile Image"
          src="/logo.png"
          mx="auto"
          className="border-2 rounded-full w-[120px] h-[120px] mt-[-60px] md:w-[200px] md:h-[200px] md:mt-[-100px] xl:w-[240px] xl:h-[240px] xl:mt-[-120px]"
        ></Avatar>
        <Text className="text-center text-2xl font-bold mt-2">Kio</Text>
        <Text className="text-center text-lg text-baseThree italic">Developer</Text>
        <Group className="flex items-center text-baseThree mb-2">
          <IoLocationOutline size={20} />
          <Text>JPN</Text>
        </Group>
        {bio.map((item, i) => (
          <Text key={i} className="text-baseThree text-sm">
            {item}
          </Text>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <Group wrap="nowrap" gap={10} mt={5}>
          <Link href="https://github.com/dev-kio/geeky-bunny">
            <SiGithub size={28} className={themeColor} />
          </Link>
          <Link href="mailto:example@gmail.com">
            <IoMdMail size={28} className={themeColor} />
          </Link>
        </Group>
        <Link href="https://example.com" className="flex gap-2 items-center justify-end">
          <LuCoffee size={28} className={themeColor} /> Buy me a coffee
        </Link>
      </div>
    </Card>
  );
}
