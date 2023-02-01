import React from 'react'
import { Container } from '@mui/material'
// import { ContainerMain } from 'components/muiCustomed/muiCustomed'

import {
  DivFlexSpaceBetween
} from './NoticePage.styled'

import {
  NoticesFilter,
  NoticesCategoryList,
  AddNoticeBtn,
  NoticesGallery
} from 'components'


export default function NoticePage() {

  return (
    <Container component='main'>
      <NoticesFilter />
      <DivFlexSpaceBetween>
        <div>
          <NoticesCategoryList />
        </div>
        <div>
          <AddNoticeBtn />
        </div>
      </DivFlexSpaceBetween>
      <NoticesGallery />
    </Container>
  )
}