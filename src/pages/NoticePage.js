import React from 'react'

import {
  NoticesFilter,
  NoticesCategoryList,
  AddPetBtn,
  NoticesGallery
} from 'components'

export default function NoticePage() {

  return (
    <>
      <NoticesFilter />
      <NoticesCategoryList />
      <AddPetBtn />
      <NoticesGallery />
    </>
  )
}