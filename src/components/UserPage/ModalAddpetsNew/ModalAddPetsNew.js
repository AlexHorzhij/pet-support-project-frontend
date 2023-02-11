import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPetToList,
  updatePetFromList,
} from 'redux/userData/userDataOperations';
import {
  AddPetTitle,
  BoxWidthMax,
  ModalCloseButton,
  ModalHeadingWrapper,
} from './ModalAddPetsNew.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { getPets } from 'redux/userData/userDataSelectors';
import { useTranslation } from 'react-i18next';

const ModalAddPetsNew = ({ onModalClose, isUpdateAction = false, petId }) => {
  const [data, setData] = useState({
    name: '',
    date: '',
    breed: '',
    description: '',
    avatarUrl: '',
  });
  const pets = useSelector(getPets);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);
  const { t } = useTranslation('common');

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
    setPreview(preview);
    fileHandler(newData);
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} onModalClose={onModalClose} />,
    <StepTwo
      preview={images[0]?.src}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      onModalClose={onModalClose}
    />,
  ];

  return (
    <>
      <ModalHeadingWrapper>
        <BoxWidthMax>
          <AddPetTitle>
            {isUpdateAction ? t('EditPet') : t('AddPet')}
          </AddPetTitle>
        </BoxWidthMax>

        <ModalCloseButton onClick={onModalClose}>
          <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
        </ModalCloseButton>
      </ModalHeadingWrapper>
      {steps[currentStep]}
    </>
  );
};

export default ModalAddPetsNew;
