import Checkbox from '@mui/material/Checkbox';
import { Favorite } from '@mui/icons-material';

export default function AddToFavorite({
  favorite = false,
  id,
  bg,
  handleChange,
}) {
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
        id={id}
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
