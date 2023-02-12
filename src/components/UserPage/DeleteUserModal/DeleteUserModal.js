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
  Text,
  AgreementText,
  DeleteModalButton,
} from './DeleteUserModal.styled';

export default function DeleteUserModal({ onModalClose }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

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
        If you delete your account, all of your data will be removed, including
        your pets data, your ads, and your favorites. Are you sure you want to
        continue?
      </Text>
      <AgreementText
        control={
          <Checkbox checked={checked} onClick={() => setChecked(pr => !pr)} />
        }
        label="Yes, I want to delete all my data"
      />
      <BoxFlex>
        <DeleteModalButton variant="outlined" onClick={() => onModalClose()}>
          Cancel
        </DeleteModalButton>
        <DeleteModalButton
          variant="contained"
          onClick={() => onDeleteClick()}
          disabled={!checked}
        >
          Delete
        </DeleteModalButton>
      </BoxFlex>
    </ModalCard>
  );
}
