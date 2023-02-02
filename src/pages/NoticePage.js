import React from 'react';
import { Container } from '@mui/material';

import {
  NoticesFilter,
  NoticesCategoryList,
  AddNoticeBtn,
  NoticesGallery,
} from 'components';

import { nanoid } from 'nanoid';
import Rectangle16 from 'assets/images/Rectangle16.jpg';

export default function NoticePage() {
  const data = [
    {
      _id: nanoid(),
      title: 'Cute dog looking for a home',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 'five',
      price: '50',
      url: Rectangle16,
    },
    {
      _id: nanoid(),
      title: 'Cute dog looking for a home',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 'five',
      price: '50',
      url: Rectangle16,
    },
    {
      _id: nanoid(),
      title: 'Cute dog looking for a home',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 'five',
      price: '50',
      url: Rectangle16,
    },
    {
      _id: nanoid(),
      title: 'Cute dog looking for a home',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 'five',
      price: '50',
      url: Rectangle16,
    },
  ];
  return (
    <Container component="main">
      <NoticesFilter />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <NoticesCategoryList />
        </div>
        <div>
          <AddNoticeBtn />
        </div>
      </Container>
      <NoticesGallery data={data} />
    </Container>
  );
}
