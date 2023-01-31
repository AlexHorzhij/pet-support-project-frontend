import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./newsOperations";


const initialState = {
    news: [],
    isLoading: false,
    error: null,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.news = payload;
            })
            .addCase(fetchNews.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})