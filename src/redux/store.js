import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
});

export default store;
