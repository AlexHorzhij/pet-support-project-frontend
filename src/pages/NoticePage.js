import React from 'react'

import {
  Main,
  DivFlexSpaceBetween
} from './NoticePage.styled'

import {
  NoticesFilter,
  NoticesCategoryList,
  AddPetBtn,
  NoticesGallery
} from 'components'

export default function NoticePage() {

  return (
    <Main>
      <NoticesFilter />
      <DivFlexSpaceBetween>
        <NoticesCategoryList />
        <AddPetBtn />
      </DivFlexSpaceBetween>
      <NoticesGallery />
    </Main>
  )
}