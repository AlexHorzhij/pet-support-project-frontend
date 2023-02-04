import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from '../components/News/NewsList/newsList';
import { Container } from '@mui/material';
import { Main } from 'components/News/NewsItem/newsItem.styled';

export default function NewsPage() {
  return (
    <Main>
      <Container component="main">
        <Title text="News" />
        <NewsSearch />
        <NewsList />
      </Container>
    </Main>
  );
}
