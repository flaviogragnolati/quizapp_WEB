import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { SCHOOL_ENDPOINT, SUBJECT_ENDPOINT } from "utils/endpoints";

const initialState_School = {
  SchoolQuizList: {
    error: null,
    QuizList: {},
  },
  SchoolSubjectList: {
    error: null,
    SubjectList: {},
  },
};

const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};
const isPendingAction = (action) => {
  return action.type.endsWith("pending");
};


export const getSchoolQuizList = createAsyncThunk(
  "School/getQuiz",
  async () => {
    const data = await axios.get(SCHOOL_ENDPOINT + 1 + "/quizzes");
    return data;
  }
);

export const getSchoolSubjectsList = createAsyncThunk(
  "School/getSubject",
  async () => {
    const data = await axios.get(SCHOOL_ENDPOINT + 1 + "/subjects");
    return data;
  }
);

export const CreateSubject = createAsyncThunk(
  "School/CreateSubject",
  async (payload) => {
    payload.SchoolId = 1;
    const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
    const { subject } = Subject_response;
    return subject;
  }
);

export const DelateSubject = createAsyncThunk(
  "School/DelateSubject",
  async (payload) => {
    const Subject_response = await axios.delete(SUBJECT_ENDPOINT + '/' + payload);
    return Subject_response;
  }
);

const SchoolSlice = createSlice({
  name: "School",
  initialState: initialState_School,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchoolQuizList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolQuizList.QuizList = payload.data.quizzes.byId;
    });
    builder.addCase(getSchoolSubjectsList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = payload;
    });
    builder.addCase(CreateSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addCase(DelateSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
      console.log(payload.data.id)
      let s = state.SchoolSubjectList.SubjectList.filter((subject) => {
        console.log(subject)
      })
      console.log(s)
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
