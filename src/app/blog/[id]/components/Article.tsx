'use client';

import Image from 'next/image';
import classes from '@/styles/Article.module.css';
import FormatDate from '@/components/FormatDate';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/panda-syntax-light.css';
import TableOfContents from './TableOfContents';
import type { ArticleType } from '@/types/ArticleType';
import type { TagType } from '@/types/TagType';
import MyIcons from '@/icons/MyIcons';
import { Badge, Group, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { TbMoodCry } from 'react-icons/tb';

export default function Article({ lang, article }: { lang: string; article: ArticleType }) {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  const tags: TagType[] | undefined = article.tags;
  const loadContent = lang ? (article.contentJa as string) : article.content;
  if (!loadContent) {
    return (
      <Group className="flex text-baseThree mx-auto px-2 md:px-4 flex-nowrap items-center m-4">
        <Text className="text-lg">Sorry, this is unavailable.</Text>
        <TbMoodCry size={28} />
      </Group>
    );
  }
  const $ = cheerio.load(loadContent);
  $('pre code').each((_, elm) => {
    const parentElm = $(elm).parent().parent();
    const fileName = parentElm.attr('data-filename');

    const className = $(elm).attr('class');
    let language = className?.replace('language-', '');

    let result;
    if (language) {
      try {
        result = hljs.highlight($(elm).text(), { language });
      } catch {
        result = hljs.highlightAuto($(elm).text());
      }
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    } else {
      $(elm).addClass('plaintext hljs');
    }

    if (fileName) {
      $(elm).parent().before(`<div class="filename"><span>${fileName}</span></div>`);
    }
  });

  type TocType = {
    tag: string;
    label: string;
    href: string;
  };

  const toc: TocType[] = [];
  $('h3, h4, h5').each((_, elm) => {
    $(elm).attr('id', `toc_${_}`);
    toc.push({
      tag: $(elm).prop('name'),
      label: $(elm).text(),
      href: `#${$(elm).attr().id}`,
    });
  });

  const html = $.html();

  return (
    <div className="flex flex-col text-baseZero mx-auto xl:w-[70%] p-4 m-4">
      <div>
        <div className={classes.article}>
          <h1 className="mb-2 text-ellipsis overflow-hidden ...">
            {lang ? article.titleJa : article.title}
          </h1>
          <h2 className="mb-2 text-ellipsis overflow-hidden ...">
            {lang ? article.headlineJa : article.headline}
          </h2>
          <Group>
            {tags?.map(({ name, id }: { name: string; id: string }) => (
              <Badge
                key={id}
                size="sm"
                variant="transparent"
                className="text-baseZero text-base h-auto"
              >
                <p className="flex items-center gap-2 justify-between text-baseZero">
                  <MyIcons iconName={name} />
                  {name}
                </p>
              </Badge>
            ))}
          </Group>
          <FormatDate dateString={article.createdAt} />
          <Image
            src={article.eyecatch?.url ?? '/no-image.png'}
            alt="Article Image"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg object-cove my-2 mx-auto w-full lg:w-[70%] xl:w-[60%]"
            priority={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-4 mx-auto lg:grid lg:grid-cols-4">
          <article className={`${classes.article} md:col-span-3`}>
            <div dangerouslySetInnerHTML={{ __html: html || '' }}></div>
          </article>
          <div className="relative toc">
            <div className="sticky top-1 py-4 lg:w-fit mx-2">
              <TableOfContents toc={toc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
