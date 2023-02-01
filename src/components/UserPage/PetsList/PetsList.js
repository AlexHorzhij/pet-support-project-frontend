import React from 'react';
import PetItem from '../PetItem/PetItem';
import { List } from '@mui/material';
function PetsList({ pets }) {
  return (
    <List style={{ listStyle: 'none', padding: '0' }}>
      {pets &&
        pets.map(({ id, picture, name, dateOfBirth, breed, comment }) => {
          return (
            <PetItem
              key={id}
              imgSrc={picture}
              name={name}
              birthDate={dateOfBirth}
              breed={breed}
              comment={comment}
              id={id}
            />
          );
        })}
    </List>
  );
}

export default PetsList;
