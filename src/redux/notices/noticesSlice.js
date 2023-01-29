import { createSlice } from "@reduxjs/toolkit";
import { fetchNotices } from "./noticesOperations";


const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

export const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNotices.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchNotices.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchNotices.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})