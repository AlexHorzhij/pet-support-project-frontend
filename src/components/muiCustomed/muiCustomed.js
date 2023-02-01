import React from 'react'

import { Container } from '@mui/material'

export const ContainerMain = ({ children }) => {
  return (
    <Container component="main"
      sx={{
        // pt: 8,
        // backgroundColor: 'background.default'
      }}> {children} </Container>
  )
}