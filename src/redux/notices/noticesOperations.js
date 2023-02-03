import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestNotices } from 'API/api'


export const fetchNoticesByCategory = createAsyncThunk(
    'fetchNotices',
    async (categoryName, { rejectWithValue }) => {
        try {
            const notices = await requestNotices({ category: categoryName })
            console.log(notices)
            return notices
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const fetchNoticesBySearch = createAsyncThunk(
    'fetchNotices',
    async (query, { rejectWithValue }) => {
        try {
            const notices = await requestNotices({
                category: query.categoryName,
                search: query.search
            })
            return notices
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)