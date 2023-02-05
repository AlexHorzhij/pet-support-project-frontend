import { NewsItem } from '../NewsItem/newsItem';
import { Loader } from 'components/Loader/Loader';
import { NewsGrid } from './newsList.styled';
import { NoNewsItem } from '../NoNewsItem/NoNewsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from 'redux/news/newsSelectors';
import { fetchNews } from 'redux/news/newsOperations';
import { sortObjByDate } from 'services/sortObjByDate';

import { useState } from 'react';
import { Pagination } from '@mui/material';
import usePagination from '../../../services/pagination';

export const NewsList = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const { news, error, isLoading } = useSelector(getNews);
  
  const sortedNews = sortObjByDate(news, 'date');
 
  // ==============Pagination================
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(sortedNews.length / PER_PAGE);
  const paginationData = usePagination(sortedNews, PER_PAGE)
  const handleChangePagination = (event, page) => {
    setPage(page)
    paginationData.jump(page)    
  }
//============================================

  return (
    <>
      {error && <p>{error.data}</p>}
      {isLoading ? <Loader /> : ''}
      {news.length === 0 && !isLoading && <NoNewsItem />}
      {news && (
        <NewsGrid component="ul" container columnSpacing={4} rowSpacing={7}>
          {paginationData.currentData().map(({ _id, title, description, date, url }) => (
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
      <Pagination
        color="primary" 
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePagination}
        style={{display: 'flex', justifyContent: 'center'}}
      />
    </>
  );
};
