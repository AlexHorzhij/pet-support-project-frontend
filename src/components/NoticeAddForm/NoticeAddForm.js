import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Step1AddNotice } from 'components/NoticeAddForm/Step1AddNotice';
import { Step2AddNotice } from 'components/NoticeAddForm/Step2AddNotice';
import { addNewNotice } from 'redux/notices/noticesOperations';
import { ToggleButton, ToggleButtonGroup, Button, Container } from '@mui/material';
import { toast } from 'react-hot-toast';

import { useParams, useNavigate } from 'react-router-dom';

export const NoticeAddForm = ({ handleClose }) => {
  const {categoryName} = useParams()
  console.log('categoryName: ', categoryName);
  const [category, setCategory] = useState(null);
  const [data, setData] = useState({
    // step-1:
    title: '',
    name: '',
    birthdate: '',
    breed: '',
    // step-2:
    sex: '',
    location: '',
    price: '',
    avatarUrl: '',
    description: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  // const handleStatus = (_, newStatus) => {
  //   if (newStatus !== null) {
  //     setCategory(newStatus);
  //   }
  //   console.log(category);
  // };

  const handleNextStep = (newData, final = false) => {
    if (!category) {
      toast.error('choose status');
      return;
    }
    setData(prev => ({ ...prev, ...newData, category: category }));

    if (final) {
      const formData = new FormData();
      for (let value in newData) {
        formData.append(value, newData[value]);
      }

      dispatch(addNewNotice(formData));

      handleClose();

      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <Step1AddNotice
      next={handleNextStep}
      data={data}
      handleClose={handleClose}
    />,

    <Step2AddNotice next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  const onClickCategory = async (e) => {
    setData(prev => ({ ...prev, category: e.target.name }))
    console.log('asdf')
  }

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
            name="lost-found"
            variant={data.category === 'lost-found' ? 'contained' : 'outlined'}
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            lost/found
          </Button>
          <Button
            variant={data.category === 'for-free' ? 'contained' : 'outlined'}
            name="for-free"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            in good hands
          </Button>
        </Container>
      )}
      {/* {currentStep === 0 && (
        <ToggleButtonGroup
          color="primary"
          value={category}
          exclusive
          name="category"
          onChange={handleStatus}
          aria-label="category"
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <ToggleButton value="sell">sell</ToggleButton>
          <ToggleButton value="lost/found">lost/found</ToggleButton>
          <ToggleButton value="in good hands">in good hands</ToggleButton>
        </ToggleButtonGroup>
      )} */}
      {steps[currentStep]}
    </>
  );
};