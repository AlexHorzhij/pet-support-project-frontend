import React from 'react';
import { NewsSearch } from 'components/News/NewsSearch/newsSearch';
import { Title } from 'components/Title/Title';
import { NewsList } from '../components/News/NewsList/newsList';
import { Main, NewsContainer } from 'components/News/NewsItem/newsItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { LoaderPage } from 'components';
import { fetchNews, fetchSearchNews } from 'redux/news/newsOperations';
import { getNews } from 'redux/news/newsSelectors';
import { sortObjByDate } from 'services/sortObjByDate';
import { NoNewsItem } from 'components/News/NoNewsItem/NoNewsItem';

export default function NewsPage() {
  const { news, error, isLoading } = useSelector(getNews);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search')
  const dispatch = useDispatch();

  useEffect(() => {
      if (query === '' || query === null) {
        dispatch(fetchNews())
        return
      }
    dispatch(fetchSearchNews(query));
  }, [dispatch, query]);
  
  const onFormSubmit = (searchValue) => {
    if (searchValue?.trim() === "" ) {
      toast.error("Please, enter search value!")
      return
    }

    if (searchValue.trim().length < 3|| searchValue.includes('*')) {
      toast.error("Please, enter no less 3 letters for a correct search!")
      return
    }
    
    if (searchValue === query) {
      toast.error(`We have already found "${query}"! Please, enter new search value`)
      return
    }

    setSearchParams(searchValue !== '' ? { search: searchValue } : {})
  }

  const sortedNews = sortObjByDate(news, 'date');

  return (
    <Main>
      <NewsContainer>
        <Title text="News" />
        <NewsSearch onSubmit={onFormSubmit} value={query} />
        {error && <p>{error.data}</p>}
        {isLoading && <LoaderPage />}
        {news.length !== 0
          ? <NewsList news={sortedNews} value={query} />
          : <NoNewsItem value={query}/>}
      
      </NewsContainer>
    </Main>
  );
}
