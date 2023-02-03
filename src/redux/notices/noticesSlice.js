import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticesByCategory } from "./noticesOperations";


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
            .addCase(fetchNoticesByCategory.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchNoticesByCategory.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchNoticesByCategory.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})