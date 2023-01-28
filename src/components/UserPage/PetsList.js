import React from 'react';
import cat from '../../images/myPets/cat.png';
import dog from '../../images/myPets/dog.png';
import PetItem from './PetItem';
function PetsList() {
  return (
    <li style={{ listStyle: 'none' }}>
      <PetItem
        imgSrc={cat}
        name={'Jack'}
        birthDate={'22.04.2018'}
        breed={'Precian cat'}
        comments={[
          'Proin magna. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Suspendisse potenti.',
        ]}
      />
      <PetItem imgSrc={dog} />
    </li>
  );
}

export default PetsList;
