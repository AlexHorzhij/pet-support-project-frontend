import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addPetToList,
  updatePetFromList,
} from 'redux/userData/userDataOperations';
import {
  AddPetTitle,
  ModalCard,
  ModalCardContent,
  ModalCloseButton,
} from './Forms.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ModalAddPetsNew = ({ onModalClose, isUpdateAction = false, petId }) => {
  const [data, setData] = useState({
    name: '',
    date: '',
    breed: '',
    description: '',
    avatarUrl: '',
  });
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
    <StepOne next={handleNextStep} data={data} onModalClose={onModalClose} />,
    <StepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      onModalClose={onModalClose}
    />,
  ];

  return (
    <>
      <ModalCard>
        <ModalCardContent>
          <ModalCloseButton onClick={onModalClose}>
            <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
          </ModalCloseButton>
          <AddPetTitle>{isUpdateAction ? 'Edit pet' : 'Add pet'}</AddPetTitle>
          {steps[currentStep]}
        </ModalCardContent>
      </ModalCard>
    </>
  );
};

export default ModalAddPetsNew;
