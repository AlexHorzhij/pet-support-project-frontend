import * as React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import MultiClamp from 'react-multi-clamp';
import { useTranslation } from 'react-i18next';

import {
  NewsCard,
  Rectangle,
  NewsTitle,
  NewsText,
  NewsDate,
  CardFooter,
} from './newsItem.styled';
import { transformDate } from 'services/transformNewsDate';

export const NewsItem = ({ _id, title, description, date, url }) => {
  const publicationDate = transformDate(date);
  const { t } = useTranslation('common');

  return (
    <Grid
      component="li"
      item
      sm={12}
      md={6}
      lg={4}
      style={{
        position: 'relative',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        paddingTop: '0px',
      }}
    >
      <Rectangle variant="rectangular" sx={{ width: '86%' }} />
      <NewsCard sx={{ height: '100%' }} variant="standart">
        {_id}
        <CardContent style={{ overflow: 'hidden', padding: '0px' }}>
          <NewsTitle variant="h5" component="div">
            <MultiClamp ellipsis="..." clamp={2}>
              {' '}
              {title}
            </MultiClamp>
          </NewsTitle>
          <NewsText style={{ maxHeight: '110px', overflow: 'hidden' }}>
            {description}
            <br />
          </NewsText>
          <CardFooter>
            <NewsDate sx={{ mr: 1 }} color="text.secondary">
              {publicationDate}
            </NewsDate>
            <Link href={url} target="_blank" rel="noopener" color="primary">
              {t('NewsPage.item.readMoreBtn')}
              {/* Read more */}
            </Link>
          </CardFooter>
        </CardContent>
      </NewsCard>
    </Grid>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
};
