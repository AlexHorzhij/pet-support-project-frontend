import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Step1AddNotice } from 'components/NoticeAddForm/Step1AddNotice';
import { Step2AddNotice } from 'components/NoticeAddForm/Step2AddNotice';
import { addNewNotice } from 'redux/notices/noticesOperations';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { toast } from 'react-hot-toast';

export const NoticeAddForm = ({ handleClose }) => {
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

  const handleStatus = (newStatus) => {
    if (newStatus !== null) {
      setCategory(newStatus);
    }
  };

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

  return (
    <>
      {currentStep === 0 && (
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
      )}
      {steps[currentStep]}
    </>
  );
};
