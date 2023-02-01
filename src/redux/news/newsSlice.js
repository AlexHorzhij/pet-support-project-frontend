import { createSlice } from "@reduxjs/toolkit";
import { fetchNews, fetchSearchNews } from "./newsOperations";


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
            .addCase(fetchSearchNews.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchSearchNews.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.news = payload;
            })
            .addCase(fetchSearchNews.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})