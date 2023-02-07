import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';

// import { toggleFavorite } from 'API/api';
import { setFavorite } from 'redux/notices/noticesOperations';

export default function AddToFavorite({ favorite = false, id, bg }) {
  const [checked, setChecked] = useState(favorite);
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const handleChange = event => {
    const favorite = event.target.checked;
    const req = favorite ? 'post' : 'delete';
    const data = { id, token, req };
    dispatch(setFavorite(data));

    setChecked(favorite);
  };

  return (
    <>
      <Checkbox
        style={{ position: 'absolute', right: '12px', top: '12px' }}
        sx={{
          bgcolor: bg,
          backdropFilter: 'blur(2px)',
        }}
        inputProps={{ 'aria-label': 'favorite' }}
        icon={
          <Favorite
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
