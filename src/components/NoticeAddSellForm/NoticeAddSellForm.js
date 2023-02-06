import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Step1AddSellNotice } from 'components/NoticeAddSellForm/Step1AddSellNotice'
import { Step2AddSellNotice } from 'components/NoticeAddSellForm/Step2AddSellNotice'
import { addNewNotice } from 'redux/notices/noticesOperations';
import { formDataEntries } from 'services/formDataEntries';

export const NoticeAddSellForm = ({ handleClose }) => {
    const [data, setData] = useState({
        status: 'sell',
        // step-1:
        tittle: '',
        namePet: '',
        dateOfBirth: '',
        breed: '',
        // step-2:
        sex: '',
        location: '',
        price: '',
        avatarUrl: '',
    });

    const [currentStep, setCurrentStep] = useState(0);
    const dispatch = useDispatch();

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));
        newData.status = 'sell'

        if (final) {
            const formData = new FormData();
            for (let value in newData) {
                formData.append(value, newData[value]);

                if (value === "tittle") {
                    console.log('value: ', value);
                    formData.append("title", newData[value])
                }
            }
            // formData.append("status", 'sell')


            formDataEntries(formData)

            dispatch(
                addNewNotice(formData)
            );

            handleClose()

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