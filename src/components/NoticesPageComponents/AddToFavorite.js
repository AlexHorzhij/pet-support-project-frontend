import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';

export default function AddToFavorite() {
  const [checked, setChecked] = useState(false);
  const handleChange = event => {
    setChecked(event.target.checked);
    console.log(checked);
  };
  return (
    <>
      <Checkbox
        style={{ position: 'absolute', right: '12px', top: '12px' }}
        sx={{
          color: 'rgba(255, 255, 255, 0.6)',
          bgcolor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(2px)',
        }}
        inputProps={{ 'aria-label': 'favorite' }}
        icon={
          <Favorite
            // color="primary.main"
            sx={{
              strokeWidth: '2',
              stroke: '#F59256',
              fill: 'white',
            }}
          />
        }
        onChange={handleChange}
        checked={checked}
        checkedIcon={
          <Favorite
            sx={{
              color: '#F59256',
            }}
          />
        }
      />
    </>
  );
}
