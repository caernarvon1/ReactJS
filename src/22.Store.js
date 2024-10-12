// src/22.Store.js
import { configureStore } from '@reduxjs/toolkit'; // Import dari Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Buat slice untuk counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1; // Menggunakan "mutasi" untuk mengupdate state
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Ekspor action creators
export const { increment, decrement, reset } = counterSlice.actions;

// Konfigurasi store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Menggunakan reducer dari slice
  },
});

export default store;
