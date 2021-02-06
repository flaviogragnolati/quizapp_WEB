import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { TEACHER_ENDPOINT, ENROLLS_ENDPOINT, TO_STUDENT } from "utils/endpoints";

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

//POST

export const enrollToSudent = createAsyncThunk(
  "school/EnrollToSudent", async (payload) => {
    const Quiz = await axios.post(TO_STUDENT , payload);
    return Quiz.data;
});


const isPendingAction = isPending(
    getQuizesTeacher,
    getToEnrollList,
    enrollToSudent,
    );

const isRejectedAction = isRejected(
    getQuizesTeacher,
    getToEnrollList,
    enrollToSudent,
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
    builder.addCase(enrollToSudent.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.UserDetail.data = payload;
      state.TeacherUserList = state.TeacherUserList.filter((Users) => Users.id !== payload.id)}); 
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
