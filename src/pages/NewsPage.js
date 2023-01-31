import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from 'components/News/NewsList/newsList';

export default function NewsPage() {
  return (
    <>
      <Title text="News" />
      <NewsSearch />
      <NewsList />
    </>
  );
}
