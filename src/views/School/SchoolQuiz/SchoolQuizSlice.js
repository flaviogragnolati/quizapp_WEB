import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import {
    QUIZ_SCHOOL_ENDPOINT,
} from 'utils/endpoints';

const initialState_Quiz = {
  status: status.idle,
  restore: false,
  error: null,
  QuizSchool: {},
  token: null,
};



export const getSchoolQuizList = createAsyncThunk(
  'SchoolQuiz/getQuiz',
  async () => {
    const data = await axios.get(QUIZ_SCHOOL_ENDPOINT + 1 + '/quizzes');
    return data;
  }
);


const SchoolQuizSlice = createSlice({
  name: 'SchoolQuiz',
  initialState: initialState_Quiz,
  reducers: {
  },
  extraReducers: {
    [getSchoolQuizList.pending]: (state, {  }) => {
      state.status = status.pending;
    },
    [getSchoolQuizList.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.QuizSchool = payload.data.quizzes.byId;;
    },
    [getSchoolQuizList.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});


export default SchoolQuizSlice;
