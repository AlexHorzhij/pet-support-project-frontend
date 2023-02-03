import { OurFriendsList } from 'components';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Title } from 'components/Title/Title';

const partnersExample = [
  {
    _id: '1',
    title: 'Сіріус',
    url: 'https://dogcat.com.ua',
    addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
    workDays: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true, from: '11:00', to: '16:00' },
      { isOpen: true, from: '11:00', to: '16:00' },
    ],
    phone: '+380931934069',
    email: null,
  },
  {
    _id: '2',
    title: 'Сіріус',
    url: 'https://dogcat.com.ua',
    addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
    workDays: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true, from: '11:00', to: '16:00' },
      { isOpen: true, from: '11:00', to: '16:00' },
    ],
    phone: null,
    email: 'sirius@email.com',
  },
  {
    _id: '3',
    title: 'Сіріус',
    url: 'https://dogcat.com.ua',
    addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
    workDays: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true, from: '11:00', to: '16:00' },
      { isOpen: true, from: '11:00', to: '16:00' },
    ],
    phone: '+380931934069',
    email: null,
  },
  {
    _id: '4',
    title: 'Сіріус',
    url: 'https://dogcat.com.ua',
    addressUrl: null,
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: null,
    workDays: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true, from: '11:00', to: '16:00' },
      { isOpen: true, from: '11:00', to: '16:00' },
    ],
    phone: '+380931934069',
    email: null,
  },
  {
    _id: '5',
    title: 'Сіріус',
    url: 'https://dogcat.com.ua',
    addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
    workDays: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true, from: '11:00', to: '16:00' },
      { isOpen: true, from: '11:00', to: '16:00' },
    ],
    phone: '+380931934069',
    email: null,
  },
];

const OurFriendsPage = () => {
  const [partnersArr, setPartnersArr] = useState(null);

  useEffect(() => {
    setPartnersArr(partnersExample);
  }, []);

  return (
    <Container component="main">
      <Title text="Our Friends" />
      <OurFriendsList partners={partnersArr} />
    </Container>
  );
};

export default OurFriendsPage;
