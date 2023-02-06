import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperations';
import { Step1AddSellNotice } from 'components/NoticeAddSellForm/Step1AddSellNotice'
import { Step2AddSellNotice } from 'components/NoticeAddSellForm/Step2AddSellNotice'

export const NoticeAddSellForm = ({ handleClose }) => {
    const [data, setData] = useState({
        // step-1:
        tittle: '',
        namePet: '',
        dateOfBirth: '',
        breed: '',
        // step-2:
        sex: '',
        location: '',
        price: '',
        imageUrl: '',
    });

    const [currentStep, setCurrentStep] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));

        if (final) {
            dispatch(
                registerUser({
                    tittle: '',
                    namePet: '',
                    dateOfBirth: '',
                    breed: '',
                    sex: '',
                    location: '',
                    price: '',
                    imageUrl: '',
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
        <Step1AddSellNotice next={handleNextStep} data={data}
            handleClose={handleClose} />,

        <Step2AddSellNotice
            next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];

    return <>{steps[currentStep]}</>;
};