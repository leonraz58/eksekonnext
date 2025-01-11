import { useDispatch, useSelector, useStore } from 'react-redux'

import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {baseApi} from "@/lib/base-api";
export const makeStore = () => {
    return configureStore({
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
        reducer: combineSlices(baseApi),
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()