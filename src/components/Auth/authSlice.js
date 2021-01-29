import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import {
  ME_ENDPOINT,
  LOGIN_ENDPOINT,
  SCHOOL_REGISTER_ENDPOINT,
  AUTH_ENDPOINT,
} from 'utils/endpoints';

const initialState_Auth = {
  status: status.idle,
  restore: false,
  error: null,
  user: {},
  school: {},
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

export const registerUser = createAsyncThunk(
  'user/register',
  async (payload) => {
    const user_response = await axios.post(USER_REGISTER_ENDPOINT, payload);
    // const user_response = await fetch('http://localhost:3000/auth/register',
    //  {method:'POST', body:JSON.stringify(payload),headers:{
    //   'Content-Type': 'application/json'
    // }});

    return user_response.data;
  }
);

export const registerSchool = createAsyncThunk(
  'school/register',
  async (payload) => {
    const school_response = await axios.post(SCHOOL_REGISTER_ENDPOINT, payload);
    return school_response.data;
  }
);

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
      state.status = status.reset;
      window.localStorage.removeItem(STORE_TOKEN);
      delete axios.defaults.headers.common.Authorization;
      window.localStorage.setItem('__logout__', Date.now());
    },
    logout: (state, { payload }) => {
      state.token = null;
      state.restore = false;
      state.status = status.reset;
      window.localStorage.removeItem(STORE_TOKEN);
      delete axios.defaults.headers.common.Authorization;
      window.localStorage.setItem('__logout__', Date.now());
    },
  },
  extraReducers: {
    [restoreSession.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [restoreSession.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.restore = true;
      state.user = payload;
    },
    [restoreSession.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
    [registerUser.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.user = payload.user;
      state.token = payload.token;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
    [registerSchool.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [registerSchool.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.school = payload.user;
      state.token = payload.token;
    },
    [registerSchool.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});

export default authSlice;
