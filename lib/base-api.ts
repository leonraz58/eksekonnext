import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'items-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://0b5f90d8e2dd9671.mokky.dev/',
    }),
    endpoints: () => ({}),
    tagTypes: ["Items"],
})