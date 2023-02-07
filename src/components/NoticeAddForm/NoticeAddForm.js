import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Step1AddNotice } from 'components/NoticeAddForm/Step1AddNotice';
import { Step2AddNotice } from 'components/NoticeAddForm/Step2AddNotice';
import { addNewNotice } from 'redux/notices/noticesOperations';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { toast } from 'react-hot-toast';

export const NoticeAddForm = ({ handleClose }) => {
  const [status, setStatus] = useState(null);
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

  const handleStatus = (e, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
  };

  const handleNextStep = (newData, final = false) => {
    if (!status) {
      toast.error('choose status');
      return;
    }
    setData(prev => ({ ...prev, ...newData, status: status }));

    if (final) {
      //   const formData = new FormData();
      //   for (let value in newData) {
      //     formData.append(value, newData[value]);

      //     if (value === 'title') {
      //       console.log('value: ', value);
      //       formData.append('title', newData[value]);
      //     }
      //   }
      //   //   formData.append('status', status);

      //   formDataEntries(formData);

      dispatch(addNewNotice(newData));

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
          value={status}
          exclusive
          name="status"
          onChange={handleStatus}
          aria-label="status"
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
