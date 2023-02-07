import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPetToList,
  updatePetFromList,
} from 'redux/userData/userDataOperations';
import {
  AddPetTitle,
  // ModalCard,
  // ModalCardContent,
  ModalCloseButton,
} from './Forms.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { getPets } from 'redux/userData/userDataSelectors';
import { Box } from '@mui/material';

const ModalAddPetsNew = ({ onModalClose, isUpdateAction = false, petId }) => {
  const [data, setData] = useState({
    name: '',
    date: '',
    breed: '',
    description: '',
    avatarUrl: '',
  });
  const pets = useSelector(getPets);

  useEffect(() => {
    const updatedPet = pets.find(value => value._id === petId);
    if (updatedPet) {
      setData({
        name: updatedPet.name,
        date: updatedPet.date,
        breed: updatedPet.breed,
        description: updatedPet.description,
        avatarUrl: updatedPet.avatarUrl,
      });
    }
  }, [petId, pets]);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      const formData = new FormData();
      for (let value in newData) {
        formData.append(value, newData[value]);
      }
      if (!isUpdateAction) dispatch(addPetToList(formData));
      if (isUpdateAction) dispatch(updatePetFromList({ petId, formData }));
      onModalClose();
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      onModalClose={onModalClose}
      isUpdateAction
    />,
    <StepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      onModalClose={onModalClose}
      isUpdateAction
    />,
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <AddPetTitle>{isUpdateAction ? 'Edit pet' : 'Add pet'}</AddPetTitle>
        </Box>
        <ModalCloseButton onClick={onModalClose}>
          <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
        </ModalCloseButton>
      </Box>
      {steps[currentStep]}
    </>
  );
};

export default ModalAddPetsNew;
