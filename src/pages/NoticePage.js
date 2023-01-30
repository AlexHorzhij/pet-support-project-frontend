import React from 'react'

import {
  Main,
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
    <Main>
      <NoticesFilter />
      <DivFlexSpaceBetween>
        <div>
          <NoticesCategoryList />
        </div>
        <DivFlexSpaceBetween>
          <AddNoticeBtn />
        </DivFlexSpaceBetween>
      </DivFlexSpaceBetween>
      <NoticesGallery />
    </Main>
  )
}