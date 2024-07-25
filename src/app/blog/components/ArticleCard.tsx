'use client';

import { Card, Image, Text, Group } from '@mantine/core';
import type { TagType } from '@/types/TagType';
import FormatDate from '@/components/FormatDate';
import MyIcons from '@/icons/MyIcons';

type ArticleCardProps = {
  lang: string;
  title: string;
  headline: string;
  titleJa?: string;
  headlineJa?: string;
  eyecatch: string;
  tags?: TagType[];
  createdAt: string;
};

export default function ArticleCard({
  lang,
  title,
  headline,
  titleJa,
  headlineJa,
  eyecatch,
  tags,
  createdAt,
}: ArticleCardProps) {
  return (
    <Card className="flex flex-col rounded-none shadow-xl dark:shadow-lg dark:shadow-black bg-baseTwo h-full">
      <Card.Section>
        <Image src={eyecatch} alt={lang ? titleJa : title} />
      </Card.Section>

      <Card.Section className="flex justify-end p-2">
        <FormatDate dateString={createdAt} />
      </Card.Section>

      <Card.Section className="border-b-2 p-2 flex-grow">
        <Group justify="apart">
          <Text className="text-lg text-bold text-baseZero line-clamp-2">
            {lang ? titleJa : title}
          </Text>
        </Group>
        <Text className="text-sm text-baseThree line-clamp-3 pt-1">
          {lang ? headlineJa : headline}
        </Text>
      </Card.Section>

      <Card.Section className="flex justify-end border-b-2 p-2">
        <Group className="gap-2">
          {tags &&
            tags.map((tag) => (
              <Text
                key={tag.id}
                className="flex items-center text-sm text-wrap text-baseZero gap-1"
              >
                <MyIcons iconName={tag.name} /> {tag.name}
              </Text>
            ))}
        </Group>
      </Card.Section>

      <Group className="p-2"></Group>
    </Card>
  );
}
