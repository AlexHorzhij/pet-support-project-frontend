import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';

import { togleFavorite } from 'API/api';

export default function AddToFavorite({ favorite = false, id }) {
  const [checked, setChecked] = useState(favorite);
  const { token } = useSelector(getAuth);
  // const userId = '63dd4ec90739cae4a8edb372';
  const handleChange = event => {
    const favorite = event.target.checked;
    const req = favorite ? 'post' : 'delete';
    togleFavorite(id, token, req);
    setChecked(favorite);
    // if (favorite) {
    //   console.log(id);
    //   addToFavorite(id, token);
    //   setChecked(favorite);
    // } else {
    //   removeFromFavorite(id, token);
    //   setChecked(favorite);
    // }
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
