import { createAsyncThunk } from "@reduxjs/toolkit";

import {getAllNews} from 'API/api'


export const fetchNews = createAsyncThunk(
    'fetchNews',
    async (_, {rejectWithValue}) => {
        try {
            const news = await getAllNews()
            return news
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)