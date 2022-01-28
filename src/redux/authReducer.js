import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuthUserData } from '../API';

export const fetchAuthUserData = createAsyncThunk(
  'auth/fetchAuthUserData',
  async () => {
    const authUserData = await getAuthUserData();
    return authUserData.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    captcha:
      'https://www.okta.com/sites/default/files/media/image/2021-04/Okta-Captcha.png',
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
  },
});

export default authSlice.reducer;
