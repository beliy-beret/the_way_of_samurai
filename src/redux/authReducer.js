import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  deleteAuthKey,
  getAuthUserData,
  getCaptcha,
  postAuthData,
} from '../API';

export const fetchCaptcha = createAsyncThunk('auth/fetchCaptcha', async () => {
  const captchaUrl = await getCaptcha();
  return captchaUrl.url;
});

export const fetchAuthUserData = createAsyncThunk(
  'auth/fetchAuthUserData',
  async (formData) => {
    const result = await postAuthData(formData);
    if (result.resultCode === 0) {
      const authUserData = await getAuthUserData();
      return authUserData.data;
    }
    if (result.resultCode === 1) {
      throw Error(result.messages[0]);
    }
    if (result.resultCode === 10) {
      throw Error(result.messages[0]);
    }
  }
);

export const deleteAuthUserData = createAsyncThunk(
  'auth/deleteAuthUserData',
  async () => {
    await deleteAuthKey();
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
    captcha: null,
    isAuth: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAuthUserData.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchAuthUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAuthUserData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchCaptcha.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCaptcha.fulfilled]: (state, action) => {
      state.captcha = action.payload;
      state.isLoading = false;
    },
    [deleteAuthUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteAuthUserData.fulfilled]: (state) => {
      state.isAuth = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
