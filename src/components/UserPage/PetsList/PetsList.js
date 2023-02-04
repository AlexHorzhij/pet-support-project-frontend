import React, { useState } from 'react';
import PetItem from '../PetItem/PetItem';
import { List } from '@mui/material';
function PetsList({ pets }) {
  const [buttonClickId, setButtonClickId] = useState(false);

  const clickHandle = buttonId => {
    console.log(buttonId);
  };
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
              clickHandle={clickHandle}
              isClicked={buttonClickId}
            />
          );
        })}
    </List>
  );
}

export default PetsList;
