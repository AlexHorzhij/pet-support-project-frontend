import PetsList from '../PetsList/PetsList';
import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { isLoadingUpdatePet } from 'redux/userData/userDataSelectors';
function PetsData() {
  const petsDB = useSelector(state => state.userData.user.pets);
  const theme = useTheme();
  const isLoadingUpdate = useSelector(isLoadingUpdatePet);
  return (
    <>
      <PetsList pets={petsDB} />
      {isLoadingUpdate && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <ThreeCircles
            height="50"
            width="50"
            color={theme.palette.primary.main}
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </Box>
      )}
    </>
  );
}

export default PetsData;
