import { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { UserDataItemBox, UserDataItemInput } from './UserDataItem.styled';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/userData/userDataOperations';
function UserDataItem({ title = '', value = '', disabled = true }) {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState(disabled);
  const [inputValue, setInputValue] = useState(value);
  // eslint-disable-next-line no-unused-vars
  const [inputName, __] = useState(title);

  const inputRef = useRef(null);

  useEffect(() => {
    const name = inputName.toLowerCase();
    dispatch(updateUser({ name, value: inputValue }));
  }, [dispatch, inputName, inputValue, value]);

  const changeInputState = e => {
    setInputState(prev => !prev);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };
  const changeInputValue = e => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <UserDataItemBox>
      <Box sx={{ mr: 'auto' }}>
        <Typography>{title}:</Typography>
      </Box>
      <UserDataItemInput
        ref={inputRef}
        id={title}
        style={{
          borderColor: inputState ? 'transparent' : '#F59256',
          backgroundColor: inputState ? 'transparent' : '#FDF7F2',
        }}
        disabled={inputState}
        value={inputValue}
        onChange={changeInputValue}
        onBlur={changeInputState}
      />
      <IconButton
        onClick={changeInputState}
        sx={{ backgroundColor: '#FDF7F2', width: '32px', height: '32px' }}
      >
        {inputState ? (
          <ModeEditOutlineRoundedIcon
            sx={{ width: '20px', color: '#F59256' }}
          />
        ) : (
          <DoneRoundedIcon sx={{ width: '25px', color: '#F59256' }} />
        )}
      </IconButton>
    </UserDataItemBox>
  );
}

export default UserDataItem;
