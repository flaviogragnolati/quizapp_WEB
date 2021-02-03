import {
  createSlice,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { SCHOOL_REGISTER_ENDPOINT } from "utils/endpoints";

const initialState_Contact = {
  error: null,
  status: status.idle,
};

export const contactSchool = createAsyncThunk(
  "contact/contactSchool",
  async (payload) => {
    const SchoolContact = await axios.post(SCHOOL_REGISTER_ENDPOINT, payload);
    return SchoolContact;
  }
);

const isPendingAction = isPending(contactSchool);
const isFulfilledAction = isFulfilled(contactSchool);
const isRejectedAction = isRejected(contactSchool);

const ContactSlice = createSlice({
  name: "contact",
  initialState: initialState_Contact,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contactSchool.fulfilled, (state, { payload }) => {
      state.status = status.success;
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

export default ContactSlice;
