import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { toast } from 'react-hot-toast';
import { setFavorite } from 'redux/notices/noticesOperations';
import { useState } from 'react';

export default function AddToFavorite({ favorite = false, id, bg }) {
  const [check, setCheck] = useState(favorite);
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();

  const handleChange = event => {
    const favorite = event.target.checked;
    if (!token) {
      setCheck(false);
      return toast.error(`Please authorize for using this option`);
    }
    setCheck(favorite);
    const req = favorite ? 'post' : 'delete';
    const data = { id, token, req };

    dispatch(setFavorite(data));
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
        checked={check}
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
