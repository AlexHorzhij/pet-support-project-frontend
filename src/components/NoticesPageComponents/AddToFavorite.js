import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';

// import { toggleFavorite } from 'API/api';
import { setFavorite } from 'redux/notices/noticesOperations';

export default function AddToFavorite({ favorite, id, bg }) {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();

  const handleChange = event => {
    const favorite = event.target.checked;
    const req = favorite ? 'post' : 'delete';
    const data = { id, token, req };
    console.log(data);
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
        checked={favorite}
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
