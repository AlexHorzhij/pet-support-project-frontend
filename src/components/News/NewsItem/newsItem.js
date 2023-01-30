// import { PropTypes } from 'prop-types';
// import { Grid } from '@mui/material';

// export const NewsItem = ({ _id, title, description, date, url }) => {
//   return (
//     <Grid item>
//       <div>
//         <li key={_id}>
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <p>{date}</p>
//           <a href={url}>Read more</a>
//         </li>
//       </div>
//     </Grid>
//   );
// };

// NewsItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// };

import * as React from 'react';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export const NewsItem = ({ _id, title, description, date, url }) => {
  return (
    // sx={{ border: '1px solid green' }}
    <Grid item xs={12} md={4}>
      {/* <Box sx={{ minWidth: 275 }}> */}

      <Card variant="outlined">
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 5 }} variant="body2">
              {description}
              <br />
            </Typography>
          </CardContent>
          <Box>
            <CardContent>
              <Typography sx={{ mr: 1 }} color="text.secondary">
                {date}
              </Typography>
              <Link href={url} target="_blank" rel="noopener">
                Read more
              </Link>
            </CardContent>
          </Box>
        </React.Fragment>
      </Card>
      {/* </Box> */}
    </Grid>
  );
};
NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
