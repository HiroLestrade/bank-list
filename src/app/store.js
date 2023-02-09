import {configureStore} from '@reduxjs/toolkit';
import banksReducer from '../features/banks/banksSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
    reducer: {
        banks: banksReducer,
        theme: themeReducer,
    }
});

export default store;