import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from '../components/News/NewsList/newsList';
import { Main, NewsContainer } from 'components/News/NewsItem/newsItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchNews, fetchSearchNews } from 'redux/news/newsOperations';
import { getNews } from 'redux/news/newsSelectors';
import { sortObjByDate } from 'services/sortObjByDate';

export default function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [value, setValue] = useState('')
  const searchValue = searchParams.get('search')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSearchNews(searchValue));
  }, [dispatch, searchValue]);

  const handleInputChange = event => {
    setValue(event.currentTarget.value)
    };

  const handleInputSubmit = event => {
    event.preventDefault();

    if (value?.trim() === "" ) {
      toast.error("Please, enter search value!")
      return
    }
    if (value.trim().length < 3|| value.includes('*')) {
      toast.error("Please, enter no less 3 letters for a correct search!")
      return
    }
    setSearchParams( {'search': value});
  };

  const { news, error, isLoading } = useSelector(getNews);
  
  const sortedNews = sortObjByDate(news, 'date');

  return (
    <Main>
      <NewsContainer>
        <Title text="News" />
        <NewsSearch onChange={handleInputChange} onSubmit={handleInputSubmit} value={value} />
        <NewsList news={sortedNews} isLoading={isLoading} error={error} value={searchValue}/>
      </NewsContainer>
    </Main>
  );
}
