import { getArticles, getAllTags, getAllArticlesByTag } from '@/libs/microcms';
import Link from 'next/link';
import { use } from 'react';
import { Group, Text } from '@mantine/core';
import ArticleCard from './components/ArticleCard';
import TagsBar from './components/TagsBar';
import BlogPagination from '@/app/blog/components/BlogPagination';
import { TbMoodCry } from 'react-icons/tb';

type Props = {
  params: { id: string; tags: boolean };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Blog(props: Props) {
  const tags = use(getAllTags()).contents;
  const perPage = 6;
  const page = Number(props.searchParams.page ?? '1');

  // tagged content
  const { contents: tagged, totalCount: taggedTotal } = use(
    getAllArticlesByTag(props.params.id, {
      offset: page * perPage - perPage,
      limit: perPage,
    }),
  );
  // untagged content
  const { contents, totalCount } = use(
    getArticles({ offset: page * perPage - perPage, limit: perPage }),
  );

  return (
    <div className="flex flex-col my-4 md:p-4 md:m-4">
      <div className="flex flex-col items-center mb-4">
        <Text className="text-5xl mb-2 text-baseZero">Blog</Text>
      </div>
      <div className="my-4 md:my-2 md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-2 md:px-4 pb-4">
          {props.params.tags ? (
            taggedTotal ? (
              tagged.map((article) => (
                <Link
                  href={`/blog/${article.id}${props.searchParams.lang ? '?lang=ja' : ''}`}
                  key={article.id}
                >
                  <ArticleCard
                    lang={props.searchParams.lang ? `?lang=ja` : ''}
                    title={article.title}
                    headline={article.headline}
                    titleJa={article.titleJa}
                    headlineJa={article.headlineJa}
                    eyecatch={article.eyecatch?.url ?? '/no-image.png'}
                    tags={article.tags}
                    createdAt={article.createdAt}
                  />
                </Link>
              ))
            ) : (
              <Group className="items-start flex-nowrap m-4">
                <Text className="text-lg">Sorry, this is unavailable.</Text>
                <TbMoodCry size={28} />
              </Group>
            )
          ) : totalCount ? (
            contents.map((article) => (
              <Link
                href={`/blog/${article.id}${props.searchParams.lang ? '?lang=ja' : ''}`}
                key={article.id}
              >
                <ArticleCard
                  lang={props.searchParams.lang ? `?lang=ja` : ''}
                  title={article.title}
                  headline={article.headline}
                  titleJa={article.titleJa}
                  headlineJa={article.headlineJa}
                  eyecatch={article.eyecatch?.url ?? '/no-image.png'}
                  tags={article.tags}
                  createdAt={article.createdAt}
                />
              </Link>
            ))
          ) : (
            <Group className="items-start flex-nowrap m-4">
              <Text className="text-lg">Sorry, this is unavailable.</Text>
              <TbMoodCry size={28} />
            </Group>
          )}
        </div>
        <TagsBar lang={props.searchParams.lang ? `?lang=ja` : ''} tags={tags} />
      </div>
      <div className="flex justify-center items-center">
        <BlogPagination
          totalCount={props.params.tags ? taggedTotal : totalCount}
          lang={props.searchParams.lang ? '&lang=ja' : ''}
          total={
            props.params.tags ? Math.ceil(taggedTotal / perPage) : Math.ceil(totalCount / perPage)
          }
          defaultValue={page}
          withEdges
        />
      </div>
    </div>
  );
}
