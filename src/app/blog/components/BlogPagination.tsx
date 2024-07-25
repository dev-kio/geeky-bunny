'use client';
import { Group, Pagination, Text } from '@mantine/core';
import { useRouter, usePathname } from 'next/navigation';

type Props = {
  totalCount: number;
  lang: string;
  total: number;
  defaultValue: number;
  withEdges: boolean;
};

export default function BlogPagination({
  totalCount,
  lang,
  total,
  defaultValue,
  withEdges,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: number) => {
    router.push(`${pathname}/?page=${e}${lang}`);
  };

  return (
    <Group>
      <Pagination
        autoContrast={true}
        color="pink.5"
        onChange={handleChange}
        total={total}
        defaultValue={defaultValue}
        withEdges={withEdges}
      />
      {totalCount ? <Text className="text-baseThree">({totalCount})</Text> : <></>}
    </Group>
  );
}
