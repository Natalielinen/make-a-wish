import { configureStore } from '@reduxjs/toolkit';
import wishes from './slices/whishesSlice';
import stories from './slices/storiesSlice';

export const store = configureStore({
    reducer: {
        wishes,
        stories,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
