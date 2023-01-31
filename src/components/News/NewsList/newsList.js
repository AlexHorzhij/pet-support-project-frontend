import { NewsItem } from '../NewsItem/newsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsSelectors';
import { fetchNews } from 'redux/news/newsOperations';
import Loader from 'components/Loader/Loader';

export const NewsList = () => {
const dispatch = useDispatch()
  
useEffect(() => {
    dispatch(fetchNews());
}, [dispatch]);
  
  const { news, error, isLoading } = useSelector(getNews); 
  
  return (
    <ul>
      {error && <p>{error.data}</p>}
      {isLoading ? <Loader /> : ''}
      {news &&
        news.map(({ _id, title, description, date, url }) => {
          return (
            <NewsItem
              key={_id}
              title={title}
              date={date}
              description={description}
              id={_id}
              url={url}
            />
          );
        })}
    </ul>
  );
};
