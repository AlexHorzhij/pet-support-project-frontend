import * as React from 'react';
import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material/';
import { NewsTitle } from './newsItem.styled';
import { NewsText } from './newsItem.styled';
import { Rectangle } from './newsItem.styled';
import { NewsDate } from './newsItem.styled';
import { CardFooter } from './newsItem.styled';

export const NewsItem = ({ _id, title, description, date, url }) => {
  return (
    <Grid
      component="li"
      item
      mobile={12}
      tablet={6}
      desktop={4}
      style={{ position: 'relative', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Rectangle variant="rectangular" />
      <Card sx={{ height: '100%' }} variant="standart">
        {_id}
        <CardContent style={{ maxHeight: 200, overflow: 'hidden' }}>
          <NewsTitle variant="h5" component="div">
            {title}
          </NewsTitle>
          <NewsText style={{ maxHeight: '110px', overflow: 'hidden' }}>
            {description}
            <br />
          </NewsText>
          <CardFooter>
            <NewsDate sx={{ mr: 1 }} color="text.secondary">
              {date}
            </NewsDate>
            <Link href={url} target="_blank" rel="noopener" color="primary">
              Read more
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </Grid>
  );
};
NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
