import { NewsItem } from '../NewsItem/newsItem';
import { Loader } from 'components/Loader/Loader';
import { NewsGrid } from './newsList.styled';
import { NoNewsItem } from '../NoNewsItem/NoNewsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from 'redux/news/newsSelectors';
import { fetchNews } from 'redux/news/newsOperations';
import { sortNewsByDate } from 'services/sortNewsByDate';


export const NewsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const { news, error, isLoading } = useSelector(getNews);

  const sortedNews = sortObjByDate(news, 'date');

  return (
    <>
      {error && <p>{error.data}</p>}
      {isLoading ? <Loader /> : ''}
      {news.length === 0 && !isLoading && <NoNewsItem />}
      {news && (
        <NewsGrid component="ul" container columnSpacing={4} rowSpacing={7}>
          {sortedNews.map(({ _id, title, description, date, url }) => (
            <NewsItem
              key={_id}
              title={title}
              date={date}
              description={description}
              id={_id}
              url={url}
            />
          ))}
        </NewsGrid>
      )}
    </>
  );
};
