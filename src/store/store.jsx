// src/store/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice.jsx'; // ← PERBAIKI PATH

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});