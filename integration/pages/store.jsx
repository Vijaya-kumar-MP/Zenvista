// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more reducers if needed
  },
});

export default store;
