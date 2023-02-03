import PetsList from '../PetsList/PetsList';
import { useSelector } from 'react-redux';

function PetsData() {
  const petsDB = useSelector(state => state.userData.user.pets);

  return (
    <>
      <PetsList pets={petsDB} />
    </>
  );
}

export default PetsData;
