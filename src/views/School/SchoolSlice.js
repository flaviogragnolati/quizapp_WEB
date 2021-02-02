import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import { QUIZ_SCHOOL_ENDPOINT, SUBJECT_ENDPOINT } from 'utils/endpoints';

const initialState_School = {
  SchoolQuizList: {
    status: status.idle,
    error: null,
    QuizList: {},
  },
  SchoolSubjectList: {
    status: status.idle,
    error: null,
    SubjectList: {},
  },
};

const isRejectedAction = (action) => {
  return action.type.endsWith('rejected');
};
const isPendingAction = (action) => {
  return action.type.endsWith('pending');
};

export const getSchoolQuizList = createAsyncThunk(
  'school/getQuiz',
  async () => {
    const data = await axios.get(QUIZ_SCHOOL_ENDPOINT + 1 + '/quizzes');
    return data;
  }
);

export const createSubject = createAsyncThunk(
  'school/CreateSubject',
  async (payload) => {
    payload.schoolId = 1;
    const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
    const { subject } = Subject_response;
    return subject;
  }
);

const SchoolSlice = createSlice({
  name: 'school',
  initialState: initialState_School,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchoolQuizList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolQuizList.QuizList = payload.data.quizzes.byId;
    });
    builder.addCase(createSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = payload;
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

export default SchoolSlice;
