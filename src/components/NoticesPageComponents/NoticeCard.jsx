import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 200,
        p: 3,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: 2,
              color: 'primary.main',
              '&:hover': {
                color: 'text.contrast',
              },
            }}
            fullWidth
          >
            Lern more
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: 2,
              color: 'primary.main',
              '&:hover': {
                color: 'text.contrast',
              },
            }}
            fullWidth
          >
            Delete
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
