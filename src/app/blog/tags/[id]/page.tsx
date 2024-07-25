import { getAllTags } from '@/libs/microcms';
import { Metadata } from 'next';
import type { TagType } from '@/types/TagType';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Blog from '../../page';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { contents }: MicroCMSListResponse<TagType> = await getAllTags();
  const tagged = contents.find((item) => item.id === props.params.id);

  return { title: tagged?.name };
}

export async function generateStaticParams() {
  const { contents } = await getAllTags();
  const paths = contents.map((item) => {
    return {
      id: item.name,
    };
  });
  return paths;
}

export default async function Tags(props: Props) {
  const blogProps = { ...props, params: { id: props.params.id, tags: true } };
  return <Blog {...blogProps} />;
}
