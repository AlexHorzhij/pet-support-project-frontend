import { createAsyncThunk } from "@reduxjs/toolkit";

import {requestNotices} from 'API/api'


export const fetchNotices = createAsyncThunk(
    'fetchNotices',
    async (category, {rejectWithValue}) => {
        try {
            const notices = await requestNotices(category)
            return notices
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)