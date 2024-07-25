import { getArticles, getArticleDetail } from '@/libs/microcms';
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Article from './components/Article';

export const dynamic = 'force-dynamic';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.id;
  const article = await getArticleDetail(id);
  return {
    title: article.title,
  };
}

export async function generateStaticParams() {
  const { contents } = await getArticles();
  const paths = contents.map((article) => {
    return {
      article: article.id,
    };
  });
  return paths;
}

export default async function ArticleDetail(props: Props) {
  const article = await getArticleDetail(props.params.id);

  if (!article) {
    notFound();
  }

  return <Article lang={props.searchParams.lang ? `?lang=ja` : ''} article={article} />;
}
