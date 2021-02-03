import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { QUESTIONS_ENDPOINT } from 'utils/endpoints';
import { QUIZ_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';


export const CreateQuiz = createAsyncThunk(
    'Quiz/CreateQuiz',
    async (payload) => {
      payload.teachers = [1];
      payload.SchoolId = 1;
      const QuizCreate_response = await axios.post(QUIZ_ENDPOINT, payload);
      const { quiz, token } = QuizCreate_response;
      return quiz;
    }
  );

  export const CreateQuestion = createAsyncThunk(
    'Quiz/CreateQuiz',
    async (payload) => {

      payload.modifiedBy = 1;
      payload.createdBy = 1;
      const QuestionCreate_response = await axios.post(QUESTIONS_ENDPOINT, payload);
      const { quiz, token } = QuestionCreate_response;
      return quiz;
    }
  );

  export const getAllQuestions = createAsyncThunk(
    'Questions/getAllQuestions',
    async (payload) => {
      const Questions_response = await axios.get(QUESTIONS_ENDPOINT +'/'+ payload );
      return Questions_response.data;
    }
  );


  export const deleteQuestion = createAsyncThunk(
    'Questions/deleteQuestion',
    async (payload) => {
      const Questions_response = await axios.delete(QUESTIONS_ENDPOINT +'/'+ payload );
      return Questions_response.data;
    }
  );

const initialState_QuizLoader = {
  Quiz: {},
  status: status.idle,
  materiaStatus: status.idle,
  questions:[],
  error:''
};

const QuizLoaderSlice = createSlice({
  name: 'Quiz',
  initialState: initialState_QuizLoader,
  reducers: {
  },
  extraReducers: {
    [CreateQuiz.pending]: (state, {payload  }) => {
      state.status = status.pending;
    },
    [CreateQuiz.fulfilled]: (state, { payload }) => {
      state.status = status.success;
    },
    [CreateQuiz.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
    [CreateQuestion.pending]: (state, {payload  }) => {
      state.status = status.pending;
    },
    [CreateQuestion.fulfilled]: (state, { payload }) => {
      state.status = status.success;
    },
    [CreateQuestion.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
    [getAllQuestions.pending]: (state, {payload  }) => {
      state.status = status.pending;
    },
    [getAllQuestions.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.questions = payload;
    },
    [getAllQuestions.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
    [deleteQuestion.pending]: (state, {payload  }) => {
      state.status = status.pending;
    },
    [deleteQuestion.fulfilled]: (state, { payload }) => {
      state.status = status.success;
    },
    [deleteQuestion.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    },
  },
});


export default QuizLoaderSlice;
