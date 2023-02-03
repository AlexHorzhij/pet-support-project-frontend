import { createSlice } from "@reduxjs/toolkit";
import { manageModalWin } from "./modalWinOperations";


const initialState = {
    isModalOpen: false
}

export const modalWinSlice = createSlice({
    name: 'modalWin',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // .addCase(toggleModalWin.pending, state => {
            //     state.isModalOpen = true;
            // })
            .addCase(manageModalWin.fulfilled, (state, { payload }) => {
                state.isModalOpen = payload;
            })
            // .addCase(toggleModalWin.rejected, (state, { payload }) => {
            //     state.isModalOpen = false;
            //     state.error = payload;
            // })
    }
})