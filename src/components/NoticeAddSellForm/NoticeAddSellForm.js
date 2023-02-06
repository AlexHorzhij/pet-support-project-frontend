import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperations';
import { StepOneAddSellNotice } from 'components/NoticeAddSellForm/StepOneAddSellNotice'
// import StepTwo from './StepTwo';

export const NoticeAddSellForm = (handleClose) => {
    const [data, setData] = useState({
        // step-1:
        tittle: '',
        namePet: '',
        dateOfBirth: '',
        breed: '',
        // step-2:
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

            navigate('/login');

            return;
        }

        setCurrentStep(prev => prev + 1);
    };

    const handlePrevStep = newData => {
        setData(prev => ({ ...prev, ...newData }));
        setCurrentStep(prev => prev - 1);
    };

    const steps = [
        <StepOneAddSellNotice next={handleNextStep} data={data} handleClose={handleClose} />,
        <div next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];

    return <>{steps[currentStep]}</>;
};