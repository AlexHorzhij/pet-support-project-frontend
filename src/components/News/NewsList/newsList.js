import { NewsItem } from '../NewsItem/newsItem';
import { Loader } from 'components/Loader/Loader';
import { NewsGrid } from './newsList.styled';
import { NoNewsItem } from '../NoNewsItem/NoNewsItem';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import usePagination from '../../../services/pagination';

export const NewsList = ({news, error, isLoading, value}) => {


  // ==============Pagination================
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(news.length / PER_PAGE);
  const paginationData = usePagination(news, PER_PAGE)
  const handleChangePagination = (event, page) => {
    setPage(page)
    paginationData.jump(page)    
  }
//============================================

  return (
    <>
      {error && <p>{error.data}</p>}
      {isLoading && <Loader />}
      {news.length === 0 && <NoNewsItem value={value} />}
      {news.length !== 0 && (
        <>
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
      )}
    </>
  );
};
