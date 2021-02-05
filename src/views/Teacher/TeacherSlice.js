import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { TEACHER_ENDPOINT, ENROLLS_ENDPOINT } from "utils/endpoints";

const initialState_Teacher = {
  TeacherQuizList: {},
  TeacherUserList: {},
  UserDetail: {
    data: {},
    role: {},
  },
};

//GET

export const getQuizesTeacher = createAsyncThunk(
  "school/GetQuizesTeacher", async (payload) => {
  const Quiz = await axios.get(TEACHER_ENDPOINT + 'quizzesTeacher/' + payload);
  return Quiz.data;
});

export const getToEnrollList = createAsyncThunk(
    "school/GetToEnrollList", async (payload) => {
    const Quiz = await axios.get(ENROLLS_ENDPOINT + payload);
    return Quiz.data;
  });

const isPendingAction = isPending(
    getQuizesTeacher,
    getToEnrollList,
    );

const isRejectedAction = isRejected(
    getQuizesTeacher,
    getToEnrollList,
    );

const TeacherSlice = createSlice({
  name: "school",
  initialState: initialState_Teacher,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuizesTeacher.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.TeacherQuizList = payload;
    });
    builder.addCase(getToEnrollList.fulfilled, (state, { payload }) => {
        state.status = status.success;
        state.TeacherUserList = payload;
      });

    ////////////

    builder.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
  },
});


export default TeacherSlice;
