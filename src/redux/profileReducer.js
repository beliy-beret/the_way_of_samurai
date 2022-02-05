import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../API';

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (userId) => {
    const userProfile = await getUserProfile(userId);
    return userProfile;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userData: {
      aboutMe: '',
      contacts: {
        facebook: '',
        website: '',
        vk: '',
      },
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: 'username',
      userId: null,
      photos: {
        large: '',
        small: '',
      },
    },
    userStatus: '',
    isLoading: false,
    errors: null,
  },
  extraReducers: {
    [fetchUserProfile.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.errors = null;
    },
    [fetchUserProfile.rejected]: (state) => {
      state.errors = 'Some error';
      state.isLoading = false;
    },
  },
});

export default profileSlice.reducer;
