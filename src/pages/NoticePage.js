import React from 'react';
import { Container } from '@mui/material';
import { ScrollUpBtn } from 'components';

import {
  NoticesFilter,
  NoticesCategoryNav,
  AddNoticeBtn,
  NoticesGallery,
} from 'components';

export default function NoticePage() {
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
      <NoticesGallery />
      <ScrollUpBtn />
    </Container >
  );
}
