import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';
import type { TagType } from './TagType';

export type ArticleType = {
  id: string;
  title: string;
  headline: string;
  content: string;
  titleJa?: string;
  headlineJa?: string;
  contentJa?: string;
  eyecatch?: MicroCMSImage;
  tags?: TagType[];
} & MicroCMSDate;
