import { useRef, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

function UserDataItem({ title = '', value = '', disabled = true }) {
  const [inputState, setInputState] = useState(disabled);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        mb: '10px',
        fontSize: '18px',

        ':last-child': {
          mb: '0',
        },
      }}
    >
      <Box sx={{ mr: 'auto' }}>
        <Typography>{title}:</Typography>
      </Box>
      <input
        ref={inputRef}
        id={title}
        style={{
          borderColor: inputState ? 'transparent' : '#F59256',
          backgroundColor: inputState ? 'transparent' : '#FDF7F2',
          borderWidth: '1px',
          padding: '5px 10px',
          borderStyle: 'solid',
          borderRadius: '15px',
          width: '230px',
          margin: '0 15px',
          appearance: 'none',
          outline: 'none',
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
    </Box>
  );
}

export default UserDataItem;
