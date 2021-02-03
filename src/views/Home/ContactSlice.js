import {
  createSlice,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { SCHOOL_REGISTER_ENDPOINT, FINAL_REGISTER_SCHOOL_ENDPOINT } from "utils/endpoints";

const initialState_Contact = {
  error: null,
  status: status.idle,
  restore: false,
  user: {},
  token: null,
};

const STORE_TOKEN = 'QuizJWT';

export const contactSchool = createAsyncThunk(
  "contact/contactSchool",
  async (payload) => {
    const SchoolContact = await axios.post(SCHOOL_REGISTER_ENDPOINT, payload);
    return SchoolContact;
  }
);

export const finalRegisterSchool = createAsyncThunk( "school/finalRegisterSchool",
async (payload, { dispatch }) => {
  const SchoolFinalRegister_response = await axios.post(FINAL_REGISTER_SCHOOL_ENDPOINT, payload);
  const { user, token } = SchoolFinalRegister_response.data;
  console.log('estoy entrando?', user, token)
  dispatch(setToken(token));
  return user;
});

const isPendingAction = isPending(contactSchool, finalRegisterSchool);
const isFulfilledAction = isFulfilled(contactSchool, finalRegisterSchool);
const isRejectedAction = isRejected(contactSchool, finalRegisterSchool);

const ContactSlice = createSlice({
  name: "contact",
  initialState: initialState_Contact,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      window.localStorage.setItem(STORE_TOKEN, payload);
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
    },
    restoreToken: (state, { payload }) => {
      state.token = window.localStorage.getItem(STORE_TOKEN);
    },
    deleteToken: (state, { payload }) => {},
    logout: (state, { payload }) => {
      state.token = null;
      state.restore = false;
      state.user = {};
      state.error = null;
      state.status = status.reset;
      window.localStorage.removeItem(STORE_TOKEN);
      delete axios.defaults.headers.common.Authorization;
      window.localStorage.setItem('__logout__', Date.now());
    },
  },
  extraReducers: (builder) => {
    builder.addCase(contactSchool.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addCase(finalRegisterSchool.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.user = payload;
      state.restore = true;
    });
    builder.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
  },
});

export const { setToken } = ContactSlice.actions;

export default ContactSlice;
