import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function ModalAddsPet({ onModalClose }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <IconButton
        type="button"
        onClick={onModalClose}
        sx={{ position: 'absolute', top: 0, right: 0 }}
      >
        <CancelOutlinedIcon
          sx={{
            backgroundColor: '#FDF7F2',
            borderRadius: '50%',
            color: 'black',
          }}
        />
      </IconButton>
      <Typography>Add pet</Typography>
      <form>
        <label>
          Name pet
          <input
            style={{
              borderColor: '#F59256',
              backgroundColor: '#FDF7F2',
              borderWidth: '1px',
              padding: '5px 10px',
              borderStyle: 'solid',
              borderRadius: '15px',
              width: '230px',
              margin: '0 15px',
              appearance: 'none',
              outline: 'none',
            }}
            placeholder="Type name pet"
          />
        </label>
        <label>
          Date of birth
          <input
            style={{
              borderColor: '#F59256',
              backgroundColor: '#FDF7F2',
              borderWidth: '1px',
              padding: '5px 10px',
              borderStyle: 'solid',
              borderRadius: '15px',
              width: '230px',
              margin: '0 15px',
              appearance: 'none',
              outline: 'none',
            }}
            placeholder="Type date of birth"
          />
        </label>
        <label>
          Breed
          <input
            style={{
              borderColor: '#F59256',
              backgroundColor: '#FDF7F2',
              borderWidth: '1px',
              padding: '5px 10px',
              borderStyle: 'solid',
              borderRadius: '15px',
              width: '230px',
              margin: '0 15px',
              appearance: 'none',
              outline: 'none',
            }}
            placeholder="Type breed"
          />
        </label>
      </form>
      <Box>
        <IconButton>Cancel</IconButton>
        <IconButton>Next</IconButton>
      </Box>
    </Box>
  );
}

export default ModalAddsPet;
