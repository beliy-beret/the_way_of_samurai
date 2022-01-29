import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserList } from '../API';

export const fetchUserList = createAsyncThunk(
  'users/fetchUserList',
  async (currentPage, pageSize) => {
    const userList = await getUserList(currentPage, pageSize);
    return userList;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    pageSize: 10,
    totalUsers: null,
    currentPage: 1,
    isLoading: false,
    errors: null,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchUserList.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.userList = action.payload.items;
      state.totalUsers = action.payload.totalCount;
      state.isLoading = false;
      state.errors = null;
    },
    [fetchUserList.rejected]: (state) => {
      state.errors = 'Some error';
      state.isLoading = false;
    },
  },
});

export const { setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
