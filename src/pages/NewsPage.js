import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  LoaderPage,
  NewsSearch,
  NewsList,
  NoNewsItem,
  ScrollUpBtn,
  
} from 'components';

import { fetchNews} from 'redux/news/newsOperations';
import { getNews } from 'redux/news/newsSelectors';
import { sortObjByDate } from 'services/sortObjByDate';
import { useTranslation } from 'react-i18next';
import { Typography, Container } from '@mui/material';

export default function NewsPage() {
  const { news, error, isLoading } = useSelector(getNews);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const search = searchParams.get('search') || '';

  useEffect(() => {
    if (search === '') {
      dispatch(fetchNews());
      document.getElementById('searchForm').reset();
  }
}, [dispatch, search])

  const sortedNews = sortObjByDate(news, 'date');


  return ( 

      <Container component="main">
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {t('NewsPage.title')}
        </Typography>
        <NewsSearch />
        {error && <p>{error.data}</p>}
        {isLoading && <LoaderPage />}
        {news.length !== 0 ? (
          <NewsList news={sortedNews} />
        ) : (
          <NoNewsItem value={search} />
        )}
        <ScrollUpBtn />
      </Container>
  );


  // return (

  //     <Container component="main">
  //       <Typography variant="h2" sx={{ textAlign: 'center' }}>
  //         {t('NewsPage.title')}
  //       </Typography>
  //       <NewsSearch onSubmit={onFormSubmit} onClear={handleClearSearch} />
  //       {error && <p>{error.data}</p>}
  //       {isLoading && <LoaderPage />}
  //       {news.length !== 0 ? (
  //         <NewsList news={sortedNews} />
  //       ) : (
  //         <NoNewsItem value={query} />
  //       )}
  //       <ScrollUpBtn />
  //     </Container>
  // );
}
