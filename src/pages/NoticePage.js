import React from 'react';
import { nanoid } from 'nanoid';
import Rectangle16 from 'assets/images/Rectangle16.jpg';

import { Main, DivFlexSpaceBetween } from './NoticePage.styled';

import {
  NoticesFilter,
  NoticesCategoryList,
  NoticesCategoryItemList,
  AddNoticeBtn,
} from 'components';

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
    <Main>
      <NoticesFilter />
      <DivFlexSpaceBetween>
        <div>
          <NoticesCategoryList />
        </div>
        <DivFlexSpaceBetween>
          <AddNoticeBtn />
        </DivFlexSpaceBetween>
      </DivFlexSpaceBetween>
      <NoticesCategoryItemList data={data} />
    </Main>
  );
}
