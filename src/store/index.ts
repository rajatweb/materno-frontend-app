import { configureStore } from '@reduxjs/toolkit';
import timezoneReducer from './timezoneSlice';

import { Api } from './api/api';

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        timezone: timezoneReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([Api.middleware])
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
