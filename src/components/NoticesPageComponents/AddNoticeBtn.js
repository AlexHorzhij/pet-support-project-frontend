import React from 'react'

import { Button} from '@mui/material'

export default function AddPetBtn() {
  const handleBtn = () => {
    return
  }

  return (
    <Button
      variant="contained"
      endIcon={<p />}
      onClick={handleBtn}
    >
      Send
    </Button>
  )
}
