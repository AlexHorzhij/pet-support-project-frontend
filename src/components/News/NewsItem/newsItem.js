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
      <Card variant="outlined">
        {' '}
        <React.Fragment>
          <NewsTitle variant="h5" component="div">
            {title}
          </NewsTitle>
          <CardContent style={{ maxHeight: 100, overflow: 'auto' }}>
            <NewsText
              // style={{ maxHeight: '100%', overflow: 'auto' }}
              sx={{ mb: 1 }}
            >
              {description}
              <br />
            </NewsText>
          </CardContent>
          <CardFooter>
            <NewsDate sx={{ mr: 1 }} color="text.secondary">
              {date}
            </NewsDate>
            <Link href={url} target="_blank" rel="noopener">
              Read more
            </Link>
          </CardFooter>
        </React.Fragment>
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
