import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { manageModalWin } from 'redux/modalWin/modalWinOperations';
import { useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import {DialogContent, Dialog } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');

export default function ModalWindow({ children }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const modalCloseKeyDown = e => {
            if (e.code === 'Escape') {
                dispatch(manageModalWin(false))
            }
        };
        window.addEventListener('keydown', modalCloseKeyDown);

        return () => {
            window.removeEventListener('keydown', modalCloseKeyDown);
        };
    }, []);

    const handleClose = e => {
        if (e.target === e.currentTarget) {
            dispatch(manageModalWin(false))
        }
    };

    return createPortal(
        <Dialog
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={handleClose}
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog >,
        modalRoot
    );
}

ModalWindow.propTypes = {
    children: PropTypes.node.isRequired,
};
