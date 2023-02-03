import React from 'react';
import { Container } from '@mui/material';

import { useState } from 'react';

import {
  NoticesFilter,
  NoticesCategoryNav,
  AddNoticeBtn,
  NoticesGallery,
  Modal,
  NoticeAddForm,
} from 'components';

import { nanoid } from 'nanoid';
import Rectangle16 from 'assets/images/Rectangle16.jpg';

import { selectIsModalOpen } from 'redux/modalWin/modalWinSelectors';
import { useSelector } from 'react-redux';


export default function NoticePage() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

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

  const isModalOpen = useSelector(selectIsModalOpen)
  
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
          <NoticesCategoryNav />
        </div>
        <div>
          <AddNoticeBtn
          //  onModalOpen={toggleModal}
           />
        </div>
      </Container>
      <NoticesGallery data={data} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NoticeAddForm onModalClose={toggleModal} />
        </Modal>)}
    </Container>
  );
}
