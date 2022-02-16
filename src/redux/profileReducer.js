import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../API';

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (userId) => {
    try {
      const userProfile = await getUserProfile(userId);
      return userProfile;
    } catch {
      throw Error('Abort request !');
    }
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
        github: '',
        instagram: '',
        twitter: '',
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
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteUserProfile(state) {
      state.userData = null;
    },
  },
  extraReducers: {
    [fetchUserProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

export const { deleteUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
