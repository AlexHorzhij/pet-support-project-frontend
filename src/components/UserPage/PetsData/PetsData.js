import PetsList from '../PetsList/PetsList';
import { useSelector } from 'react-redux';

function PetsData() {
  const pets = useSelector(state => state.userData.user.pets);

  return (
    <>
      <PetsList pets={pets} />
    </>
  );
}

export default PetsData;
