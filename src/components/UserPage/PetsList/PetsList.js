import React from 'react';
import PetItem from '../PetItem/PetItem';

function PetsList({ pets }) {
  return (
    <li style={{ listStyle: 'none' }}>
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
    </li>
  );
}

export default PetsList;
