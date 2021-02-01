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



export const getQuizData = createAsyncThunk(
  'auth/getUser',
  async () => {
    const data = await axios.get(QUIZ_SCHOOL_ENDPOINT + 1 + '/quizzes');
    return data;
  }
);


const QuizInfoSlice = createSlice({
  name: 'auth',
  initialState: initialState_Quiz,
  reducers: {
  },
  extraReducers: {
    [getQuizData.pending]: (state, {  }) => {
      state.status = status.pending;
    },
    [getQuizData.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.QuizSchool = payload.data.quizzes.byId;;
    },
    [getQuizData.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});


export default QuizInfoSlice;
