import {baseApi} from "@/lib/base-api";
import {Item} from "@/lib/types";

export const itemsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getItems: build.query<Item[], void>({
            query: () => 'items',
            providesTags: ['Items'],
        }),
    }),
})

export const { useGetItemsQuery } = itemsApi;