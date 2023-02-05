import React from 'react';
import PetItem from '../PetItem/PetItem';
import { List } from '@mui/material';
function PetsList({ pets }) {
  return (
    <List style={{ listStyle: 'none', padding: '0' }}>
      {pets &&
        pets.map(({ _id, avatarUrl, name, date, breed, description }) => {
          return (
            <PetItem
              key={_id}
              avatarUrl={avatarUrl}
              name={name}
              birthDate={date}
              breed={breed}
              description={description}
              id={_id}
            />
          );
        })}
    </List>
  );
}

export default PetsList;
