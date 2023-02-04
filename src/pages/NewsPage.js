import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from '../components/News/NewsList/newsList';
import { Main, NewsContainer } from 'components/News/NewsItem/newsItem.styled';

export default function NewsPage() {
  return (
    <Main>
      <NewsContainer>
        <Title text="News" />
        <NewsSearch />
        <NewsList />
      </NewsContainer>
    </Main>
  );
}
