import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import { USER_PROFILE_ENDPOINT } from 'utils/endpoints';

const initialState_Profile = {
  status: status.idle,
  restore: false,
  error: null,
  Profile: {},
  token: null,
};

export const getProfileData = createAsyncThunk(
  'auth/getProfileData',
  async (payload) => {
    const data = await axios.get(USER_PROFILE_ENDPOINT + payload);
    return data;
  }
);

const UserProfileSlice = createSlice({
  name: 'getProfileData',
  initialState: initialState_Profile,
  reducers: {},
  extraReducers: {
    [getProfileData.pending]: (state, {}) => {
      state.status = status.pending;
    },
    [getProfileData.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.data = payload.data;
    },
    [getProfileData.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});

export default UserProfileSlice;
