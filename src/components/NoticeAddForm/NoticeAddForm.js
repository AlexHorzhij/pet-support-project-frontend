import { useState } from 'react';
import { addNewNotice, updateNotice } from 'redux/notices/noticesOperations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Button, Container } from '@mui/material';

import { Step1AddNotice } from 'components/NoticeAddForm/Step1AddNotice';
import { Step2AddNotice } from 'components/NoticeAddForm/Step2AddNotice';
import React from 'react'


export default function NoticeAddForm({ handleClose, oldData, editID })  {
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState([]);
  const { categoryName } = useParams()

  const NOTICE_CATEGORY = {
    'lost-found': 'lost/found',
    'for-free': 'in good hands',
    sell: 'sell',
  };

  const dispatch = useDispatch();
  const [data, setData] = useState({
    // step-1:
    category: oldData?.category || NOTICE_CATEGORY[categoryName],
    title: oldData?.title || '',
    name: oldData?.name || '',
    birthdate: oldData?.birthdate || '',
    breed: oldData?.breed || '',
    // step-2:
    sex: oldData?.sex || '',
    location: oldData?.location || '',
    price: oldData?.price || '',
    avatarUrl: oldData?.avatarUrl || '',
    description: oldData?.description || '',
  });

  const handleNextStep = (newData, final = false) => {
    if (!data.category) {
      toast.error('choose category');
      return;
    }
    setData(prev => ({ ...prev, ...newData, category: data.category }));

    if (final) {
      const formData = new FormData();
      for (let value in newData) {
        formData.append(value, newData[value]);
      }

      if (editID) {
        dispatch(updateNotice({ editID, formData }))
      }
      dispatch(addNewNotice(formData));

      handleClose();

      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const fileHandler = prevData => {
    if (typeof prevData.avatarUrl !== 'string') {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages([{ src: e.target.result }]);
      };
      reader.readAsDataURL(prevData?.avatarUrl);
    }
  };

  const handlePrevStep = newData => {
    fileHandler(newData);
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <Step1AddNotice
      next={handleNextStep}
      data={data}
      handleClose={handleClose}
    />,

    <Step2AddNotice
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      preview={images[0]?.src}
    />,
  ];

  const onClickCategory = async e => {
    setData(prev => ({ ...prev, category: e.target.name }));
  };

  return (
    <>
      {currentStep === 0 && (
        <Container sx={{ mb: 6 }}>
          <Button
            name="sell"
            variant={data.category === 'sell' ? 'contained' : 'outlined'}
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            sell
          </Button>
          <Button
            name="lost/found"
            variant={data.category === 'lost/found' ? 'contained' : 'outlined'}
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            lost/found
          </Button>
          <Button
            variant={
              data.category === 'in good hands' ? 'contained' : 'outlined'
            }
            name="in good hands"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            in good hands
          </Button>
        </Container>
      )}
      {steps[currentStep]}
    </>
  );
};
