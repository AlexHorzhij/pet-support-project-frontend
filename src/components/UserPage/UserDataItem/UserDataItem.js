import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import { toast } from 'react-hot-toast';

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

function UserDataItem({
  title = '',
  value = '',
  disabled = true,
  pattern,
  textMessage,
}) {
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
    let result = value.match(pattern);

    if (!result) {
      toast.error(textMessage, { duration: 3000 });
      return;
    }
    dispatch(updateUser({ name, value }));
  }, 2000);

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
      {inputName !== 'email' ? (
        <IconButton
          onClick={changeInputState}
          sx={{
            backgroundColor: '#FDF7F2',
            width: '32px',
            height: '32px',
            '&:hover': { backgroundColor: 'rgba(187, 187, 187, 0.9)' },
          }}
        >
          {inputState ? (
            <ModeEditOutlineRoundedIconStyled />
          ) : (
            <DoneRoundedIconStyled />
          )}
        </IconButton>
      ) : (
        <IconButton
          disabled={true}
          sx={{
            backgroundColor: '#FDF7F2',
            width: '32px',
            height: '32px',
          }}
        >
          <DoneRoundedIconStyled sx={{ color: 'grey' }} />
        </IconButton>
      )}
    </UserDataItemBox>
  );
}

export default UserDataItem;
