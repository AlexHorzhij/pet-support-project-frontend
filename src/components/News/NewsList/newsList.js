import { NewsItem } from '../NewsItem/newsItem';
import { NewsGrid } from './newsList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    
    <NewsGrid component="ul" container columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
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
    </NewsGrid>
  );
};
