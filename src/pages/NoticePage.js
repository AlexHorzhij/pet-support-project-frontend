import React, { useState } from 'react';
import { Container } from '@mui/material';
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material';

import {
  NoticesFilter,
  NoticesCategoryNav,
  AddNoticeBtn,
  NoticesGallery,
} from 'components';

export default function NoticePage() {
  const [offset, setOffset] = useState()
  const { palette } = useTheme()

  const getOffset = () => window.pageYOffset || document.documentElement.scrollTop
  window.addEventListener('scroll', () => {
    setOffset(getOffset)
  })

  const scrollToUp = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth',
      })
  }

  return (
    <Container component="main" >
      <NoticesFilter />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <NoticesCategoryNav />
        </div>
        <div>
          <AddNoticeBtn />
        </div>
      </Container>
      <NoticesGallery />
      {
        <IconButton onClick={scrollToUp}>
          <KeyboardArrowUpIcon
            sx={{
              borderRadius: '50%',
              width: '60px', height: '60px', color: 'lightgray',
              position: 'fixed', right: 100, bottom: 80, zIndex: 1,
              boxShadow: `inset 0 0 0 5px ${palette.primary.main}`,
              transition: '0.3s', transform: 'translateY(150px)',
              '&:hover': {
                color: 'primary.main'
              },
              transform: offset > 100 ? 'translateY(0)' : 'translateY(150px)',
            }
            } />
        </IconButton>}
    </Container >
  );
}
