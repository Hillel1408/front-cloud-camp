import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';

export default configureStore({
    reducer: {
        forms: formsReducer,
    },
});
