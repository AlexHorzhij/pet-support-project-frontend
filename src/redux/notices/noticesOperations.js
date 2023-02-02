import { createAsyncThunk } from "@reduxjs/toolkit";

import {requestNotices} from 'API/api'


export const fetchNoticesByCategory = createAsyncThunk(
    'fetchNotices',
    async (categoryName, {rejectWithValue}) => {
        try {
            const notices = await requestNotices({status: categoryName})
            return notices
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const fetchNoticesBySearch = createAsyncThunk(
    'fetchNotices',
    async (query, {rejectWithValue}) => {
        try {
            const notices = await requestNotices({
                status: query.categoryName, 
                search: query.filterValue})
            return notices
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)