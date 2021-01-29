import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import { ME_ENDPOINT, LOGIN_ENDPOINT } from 'utils/endpoints';

const initialState_Auth = {
  status: status.idle,
  restore: false,
  error: null,
  user: {},
  token: null,
};

const STORE_TOKEN = 'QuizJWT';

const fakeAPICall = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        firstName: 'Erwin',
        lastName: 'Schrödinger',
        email: 'erwin@quantum.com',
        birthdate: '12-08-1887',
        cellphone: '19610104',
      });
    }, 2000);
  });

export const localLogin = createAsyncThunk(
  'auth/localLogin',
  async (payload, thunkApi) => {
    const userData = fakeAPICall();
    return userData;
    // await axios.post(LOGIN_ENDPOINT);
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (payload, thunkApi) => {
    const userData = await axios(ME_ENDPOINT);
    console.log('userDATA');
    return userData;
  }
);

export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async (payload, tunkApi) => {
    // const userData = await axios.get(ME_ENDPOINT);
    const userData = fakeAPICall();
    return userData;
  },
  {
    condition: (payload, { getState }) => {
      const { auth } = getState();
      if (
        auth.status === status.pending ||
        auth.status === status.loading ||
        auth.status === status.error ||
        auth.status === status.succes
      ) {
        return false;
      }
    },
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState_Auth,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      window.localStorage.setItem(STORE_TOKEN, payload);
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
    },
    restoreToken: (state, { payload }) => {
      state.token = window.localStorage.getItem(STORE_TOKEN);
    },
    deleteToken: (state, { payload }) => {
      state.token = null;
      state.restore = false;
      window.localStorage.removeItem(STORE_TOKEN);
      delete axios.defaults.headers.common.Authorization;
    },
    logout: (state, { payload }) => {
      state.token = null;
      state.restore = false;
      window.localStorage.removeItem(STORE_TOKEN);
      delete axios.defaults.headers.common.Authorization;
    },
  },
  extraReducers: {
    [restoreSession.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [restoreSession.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.user = payload;
      state.restore = true;
    },
    [restoreSession.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});

export default authSlice;
