import type { ArticleType } from '@/types/ArticleType';
import type { TagType } from '@/types/TagType';
import { MicroCMSQueries, createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) throw new Error('MICROCMS_SERVICE_DOMAIN is required');
if (!process.env.MICROCMS_API_KEY) throw new Error('MICROCMS_API_KEY is required');

export const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<ArticleType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    queries,
  });
  return articles;
}

export async function getArticleDetail(contentId: string, queries?: MicroCMSQueries) {
  const articlesDetail = await microCMSClient.getListDetail<ArticleType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  });
  return articlesDetail;
}
export async function getAllTags(queries?: MicroCMSQueries) {
  const tags = await microCMSClient.getList<TagType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'tags',
    queries,
  });
  return tags;
}

export async function getAllArticlesByTag(contentId: string, queries?: MicroCMSQueries) {
  const articles = getArticles({
    filters: `tags[contains]${contentId}`,
    orders: '-publishedAt',
    ...queries,
  });
  return articles;
}
