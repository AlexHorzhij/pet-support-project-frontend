import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import {
  LoaderPage,
  NewsSearch,
  NewsList,
  NoNewsItem,
  ScrollUpBtn
} from 'components';
import { Main, NewsContainer } from 'components/News/NewsItem/newsItem.styled';

import { fetchNews, fetchSearchNews } from 'redux/news/newsOperations';
import { getNews } from 'redux/news/newsSelectors';
import { sortObjByDate } from 'services/sortObjByDate';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';


export default function NewsPage() {
  const [value, setValue] = useState('');
  const { news, error, isLoading } = useSelector(getNews);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search')
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (query === '' || query === null) {
      document.getElementById("searchForm").reset();
      dispatch(fetchNews());
      return
    }
    dispatch(fetchSearchNews(value));
  }, [dispatch, query, value]);

    const handleClearSearch = (event) => {
      event.preventDefault();
      setValue('');
      setSearchParams('');
      document.getElementById("searchForm").reset();
    };
  
  const onFormSubmit = (searchValue) => {
    if (searchValue?.trim() === "") {
      toast.error("Please, enter search value!")
      return
    }

    if (searchValue.trim().length < 3 || searchValue.includes('*')) {
      toast.error("Please, enter no less 3 letters for a correct search!")
      return
    }

    if (searchValue === value) {
      toast.error(`We have already found "${value}"! Please, enter new search value`)
      return
    }

    setValue(searchValue)
  }

  const sortedNews = sortObjByDate(news, 'date');

  return (
    <Main>
      <NewsContainer>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>{t('NewsPage.title')}</Typography>
        <NewsSearch onSubmit={onFormSubmit} onClear={ handleClearSearch} />
        {error && <p>{error.data}</p>}
        {isLoading && <LoaderPage />}
        {news.length !== 0
          ? <NewsList news={sortedNews} />
          : <NoNewsItem value={query} />
        }
        <ScrollUpBtn />
      </NewsContainer>
    </Main>
)
}
