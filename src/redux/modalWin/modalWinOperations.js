import { createAsyncThunk } from "@reduxjs/toolkit";

export const manageModalWin = createAsyncThunk(
    'modalWin',
    (status) => {
        return status
    } 
)