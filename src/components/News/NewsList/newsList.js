import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Pagination } from '@mui/material';

import { NewsItem } from '../NewsItem/newsItem';
import { NewsGrid } from './newsList.styled';
import usePagination from '../../../services/pagination';

export const NewsList = ({ news }) => {
  // ==============Pagination================
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(news.length / PER_PAGE);
  const paginationData = usePagination(news, PER_PAGE);
  const handleChangePagination = (event, page) => {
    setPage(page);
    paginationData.jump(page);
  };
  //============================================

  return (
    <>
      <NewsGrid component="ul" container columnSpacing={4} rowSpacing={7}>
        {paginationData
          .currentData()
          .map(({ _id, title, description, date, url }) => (
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
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};
