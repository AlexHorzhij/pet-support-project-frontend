import * as React from 'react';
import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NewsTitle } from './newsItem.styled';
import { NewsText } from './newsItem.styled';
import { Rectangle } from './newsItem.styled';
import { NewsDate } from './newsItem.styled';

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
          <CardContent>
            <NewsText sx={{ mb: 1 }}>
              {description}
              <br />
            </NewsText>
          </CardContent>
          <CardContent>
            <NewsDate sx={{ mr: 1 }} color="text.secondary">
              {date}
            </NewsDate>
            <Link href={url} target="_blank" rel="noopener">
              Read more
            </Link>
          </CardContent>
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
