import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://63d43ddbc52305feff6051b6.mockapi.io/api/v1/', // change baseUrl when backend will be added
    }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => "news",
            url: '/news',
            method: 'GET',
            providesTags: ["News"]
        }),
    
    })
})

export const { useGetAllNewsQuery } = newsApi;
