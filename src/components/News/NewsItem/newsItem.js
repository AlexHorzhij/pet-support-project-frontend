import * as React from 'react';
import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { NewsTitle } from './newsItem.styled';
import { NewsText } from './newsItem.styled';
import { Rectangle } from './newsItem.styled';
import { NewsDate } from './newsItem.styled';
import { CardFooter } from './newsItem.styled';

export const NewsItem = ({ _id, title, description, date, url }) => {
  return (
    <Grid item xs={12} md={4}>
      <Rectangle variant="rectangular" />
      <Card sx={{ height: '100%' }} variant="outlined">
        {_id}
        <NewsTitle variant="h5" component="div">
          {title}
        </NewsTitle>
        <CardContent style={{ maxHeight: 200, overflow: 'auto' }}>
          <NewsText
            style={{ maxHeight: '500%', overflow: 'auto' }}
            // sx={{ mb: 1 }}
          >
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
