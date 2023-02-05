import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import {
  UserDataItemBox,
  UserDataItemInput,
  UserDataTitle,
  UserDataItemtitle,
  DoneRoundedIconStyled,
  ModeEditOutlineRoundedIconStyled,
} from './UserDataItem.styled';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/userData/userDataOperations';
import { useDebouncedCallback } from 'use-debounce';

function UserDataItem({ title = '', value = '', disabled = true }) {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState(disabled);
  const [inputValue, setInputValue] = useState(value);
  // eslint-disable-next-line no-unused-vars
  const [inputName, __] = useState(title.toLowerCase());

  const inputRef = useRef(null);

  const changeInputState = e => {
    setInputState(prev => !prev);

    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };
  const debouncedInputHandler = useDebouncedCallback(value => {
    let name;
    if (inputName === 'birthday') {
      name = 'birthdate';
    } else {
      name = inputName;
    }
    dispatch(updateUser({ name, value }));
  }, 500);

  return (
    <UserDataItemBox>
      <UserDataItemtitle>
        <UserDataTitle>{title}:</UserDataTitle>
      </UserDataItemtitle>
      <UserDataItemInput
        ref={inputRef}
        style={{
          borderColor: inputState ? 'transparent' : '#F59256',
          backgroundColor: inputState ? 'transparent' : '#FDF7F2',
        }}
        disabled={inputState}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          debouncedInputHandler(e.target.value);
        }}
        onBlur={changeInputState}
      />
      <IconButton
        onClick={changeInputState}
        sx={{ backgroundColor: '#FDF7F2', width: '32px', height: '32px' }}
      >
        {inputState ? (
          <ModeEditOutlineRoundedIconStyled />
        ) : (
          <DoneRoundedIconStyled />
        )}
      </IconButton>
    </UserDataItemBox>
  );
}

export default UserDataItem;
