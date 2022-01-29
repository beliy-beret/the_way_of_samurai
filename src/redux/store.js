import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const store = configureStore({
  reducer: {
    authUser: authReducer,
    users: usersReducer,
  },
});

export default store;
