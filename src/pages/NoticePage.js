import React from 'react';
import {
  NoticesFilter,
  NoticesCategoryNav,
  AddNoticeBtn,
  NoticesGallery,
} from 'components';

import { Container } from '@mui/material';
import { ScrollUpBtn } from 'components';
import { ThreeCircles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getNotices } from 'redux/notices/noticesSelectors';
import { useTheme } from '@mui/material';

export default function NoticePage() {
  const { isLoading } = useSelector(getNotices);
  const { palette } = useTheme()

  return (
    <Container component="main" >
      <NoticesFilter />
      <Container
        style={{ display: 'flex', justifyContent: 'space-between', }}
      >
        <div>
          <NoticesCategoryNav />
        </div>
        <div>
          <AddNoticeBtn />
        </div>
      </Container>
      {isLoading ?
        <Container sx={{ display: 'flex', justifyContent: 'center', pt: 15 }}>
          <ThreeCircles color={palette.primary.main} />
        </Container>
        :
        < NoticesGallery />}
      <ScrollUpBtn />
    </Container >
  );
}
