import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/auth/authOperations';
import {
  ModalCard,
  ModalCloseButton,
} from 'components/NoticesPageComponents/LearnMoreModal/LearnMoreModal.styled';
import {
  BoxFlex,
  Warning,
  Text,
  AgreementText,
  DeleteModalButton,
} from './DeleteUserModal.styled';
import { useTranslation } from 'react-i18next';

export default function DeleteUserModal({ onModalClose }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const onDeleteClick = () => {
    dispatch(deleteUser());
    onModalClose();
  };

  return (
    <ModalCard>
      <ModalCloseButton onClick={onModalClose}>
        <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
      </ModalCloseButton>
      <Text variant="h4">
        <Warning>{t('User.DeleteModal.warning') }</Warning>
        {t('User.DeleteModal.text') }
      </Text>
      <AgreementText
        control={
          <Checkbox checked={checked} onClick={() => setChecked(pr => !pr)} />
        }
        label={t('User.DeleteModal.checkLabel') }
      />
      <BoxFlex>
        <DeleteModalButton variant="outlined" onClick={() => onModalClose()}>
          {t('User.DeleteModal.cancelBtn') }
        </DeleteModalButton>
        <DeleteModalButton
          variant="contained"
          onClick={() => onDeleteClick()}
          disabled={!checked}
        >
          {t('User.DeleteModal.deleteBtn') }
        </DeleteModalButton>
      </BoxFlex>
    </ModalCard>
  );
}
