import React from 'react';
import PetItem from '../PetItem/PetItem';

import cat from '../../../images/myPets/cat.png';
import dog from '../../../images/myPets/dog.png';
function PetsList() {
  return (
    <li style={{ listStyle: 'none' }}>
      <PetItem
        key={'1'}
        imgSrc={cat}
        name={'Jack'}
        birthDate={'20.04.2008'}
        breed={'Percian cat'}
        comments={
          'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent congue erat at massa. Duis vel nibh at velit scelerisque suscipit.'
        }
      />
      <PetItem
        key={'2'}
        imgSrc={dog}
        name={'Jack'}
        birthDate={'20.04.2008'}
        breed={'Basenji'}
        comments={
          'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent congue erat at massa. Duis vel nibh at velit scelerisque suscipit.'
        }
      />
    </li>
  );
}

export default PetsList;
