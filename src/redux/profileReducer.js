import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile, putUserData, putUserPhoto } from '../API';

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

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (data) => {
    const res = await putUserData(data.formValues, data.userId);
    if (res.resultCode === 1) {
      throw Error(res.messages[0]);
    }
  }
);

export const changeUserPhoto = createAsyncThunk(
  'profile/changeUserPhoto',
  async (file) => {
    const res = await putUserPhoto(file);
    if (res.resultCode === 1) {
      throw Error(res.messages[0]);
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
      state.error = null;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },

    [updateUserProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserProfile.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    [updateUserProfile.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [changeUserPhoto.pending]: (state) => {
      state.isLoading = true;
    },
    [changeUserPhoto.fulfilled]: (state) => {
      state.error = null;
      state.isLoading = false;
    },
    [changeUserPhoto.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { deleteUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
