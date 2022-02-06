import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuthUserData, getCaptcha } from '../API';

export const fetchAuthUserData = createAsyncThunk(
  'auth/fetchAuthUserData',
  async () => {
    const authUserData = await getAuthUserData();
    return authUserData.data;
  }
);

export const fetchCaptcha = createAsyncThunk('auth/fetchCaptcha', async () => {
  const captchaUrl = await getCaptcha();
  return captchaUrl.url;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
    captcha: null,
    isAuth: false,
    isLoading: false,
    errors: null,
  },
  extraReducers: {
    [fetchAuthUserData.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    [fetchAuthUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.errors = null;
    },
    [fetchAuthUserData.rejected]: (state) => {
      state.errors = 'Some error';
      state.isLoading = false;
    },
    [fetchCaptcha.fulfilled]: (state, action) => {
      state.captcha = action.payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
