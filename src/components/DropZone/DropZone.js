import { Box } from '@mui/system';
import {
  DropZoneBox,
  DropZonePreviewBox,
} from 'components/UserPage/ModalAddpetsNew/Forms.styled';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import addIconSVG from '../../assets/images/myPets/addImage.svg';

function DropZoneComponent({ setFieldValue, data, values }) {
  const [images, setImages] = useState([]);

  const fileHandler = (acceptedFiles, setFieldValue) => {
    setFieldValue('avatarUrl', acceptedFiles[0]);
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages([{ src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  };

  <Dropzone
    className="dropZone"
    accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
    multiple={false}
    onDrop={acceptedFiles => fileHandler(acceptedFiles, setFieldValue)}
  >
    {({ getRootProps, getInputProps }) => (
      <DropZoneBox
        sx={{
          backgroundImage: `url(${data.avatarUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {!values.avatarUrl ? (
          <Box>
            <img src={addIconSVG} alt="add pet avatar" />
          </Box>
        ) : (
          <DropZonePreviewBox sx={{ backgroundColor: 'blue' }}>
            {images.length > 0 && (
              <img
                style={{ height: '100%', objectFit: 'cover' }}
                alt="preview"
                src={images[0]?.src}
              />
            )}
          </DropZonePreviewBox>
        )}
      </DropZoneBox>
    )}
  </Dropzone>;
}

export default DropZoneComponent;
