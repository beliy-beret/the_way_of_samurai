import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

const store = configureStore({
  reducer: {
    authUser: authReducer,
    users: usersReducer,
    userProfile: profileReducer,
  },
});

export default store;
