// src/store.js
// untuk redux
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 
import { composeWithDevTools } from '@redux-devtools/extension'; 

// Konfigurasi store dengan devTools
const store = configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools(), // Aktifkan Redux DevTools
});

export default store;
