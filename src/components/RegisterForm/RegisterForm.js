import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperations';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      dispatch(
        registerUser({
          email: newData.email,
          password: newData.password,
          name: newData.name,
          city: newData.city,
          phone: newData.phone,
        })
      );

      navigate('/verification');

      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return <>{steps[currentStep]}</>;
};

export default RegisterForm;
