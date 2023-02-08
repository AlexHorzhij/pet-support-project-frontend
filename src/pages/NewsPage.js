import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from '../components/News/NewsList/newsList';
import { Main, NewsContainer } from 'components/News/NewsItem/newsItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

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
  }, [dispatch, setSearchParams]);

  useEffect(() => {
    dispatch(fetchSearchNews(searchValue));
  }, [dispatch, searchValue]);

 const { news, error, isLoading } = useSelector(getNews);

  const handleInputSubmit = (query) => {

    if (query?.trim() === "" ) {
      toast.error("Please, enter search value!")
      return
    }
    if (query.trim().length < 3|| value.includes('*')) {
      toast.error("Please, enter no less 3 letters for a correct search!")
      return
    }

    if (query === value) {
          toast.error(`We have already found "${query}"! Please, enter new search value`)
        return
    }
    setValue(query)
    setSearchParams( searchValue !== '' ? {search: query} : {})
  };
  
  const sortedNews = sortObjByDate(news, 'date');

  return (
    <Main>
      <NewsContainer>
        <Title text="News" />
        <NewsSearch onSubmit={handleInputSubmit} value={searchValue} />
        <NewsList news={sortedNews} isLoading={isLoading} error={error} value={searchValue}/>
      </NewsContainer>
    </Main>
  );
}
