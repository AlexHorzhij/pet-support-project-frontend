import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material';

export default function ScrollUpBtn() {
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
        <IconButton onClick={scrollToUp}>
            <KeyboardArrowUpIcon
                sx={{
                    borderRadius: '50%',
                    width: '60px', height: '60px', color: 'lightgray',
                    position: 'fixed', right: 40, bottom: 50, zIndex: 1,
                    boxShadow: `inset 0 0 0 5px ${palette.primary.light}`,
                    transition: '0.4s',
                    transform: offset > 100 ? 'translateY(0)' : 'translateY(120px)',
                    '&:hover': { color: 'primary.main' },
                }
                } />
        </IconButton>
    )
}
