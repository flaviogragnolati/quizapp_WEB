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
    SubjectList: [],
    SubjectDetail: {},
  },
};

const isRejectedAction = (action) => {
  return action.type.endsWith('rejected');
};
const isPendingAction = (action) => {
  return action.type.endsWith("pending");
};

//GETS

export const getSchoolQuizList = createAsyncThunk(
  'school/Get_Quiz',
  async () => {
    const Quiz = await axios.get(SCHOOL_ENDPOINT + 1 + "/quizzes");
    return Quiz;
  }
);

export const getSchoolSubjectsList = createAsyncThunk(
  "School/Get_Subject",
  async () => {
    const Subject = await axios.get(SCHOOL_ENDPOINT + 1 + "/subjects");
    return Subject.data;
  }
);

export const getSchoolSubjectsDetail = createAsyncThunk(
  "School/Get_SubjectDetail",
  async (payload) => {
    const Subject = await axios.get(SUBJECT_ENDPOINT + '/' + payload);
    return Subject;
  }
);


//POST

export const createSubject = createAsyncThunk(
  'school/Create_Subject',
  async (payload) => {
    payload.SchoolId = 1;
    const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
    const { subject } = Subject_response;
    return subject;
  }
);

//DELETE

export const delateSubject = createAsyncThunk(
  "School/Delate_Subject",
  async (payload) => {
    const Subject_response = await axios.put(SUBJECT_ENDPOINT + '/' + payload);
    return Subject_response.data;
  }
);

//PUT

export const editSubject = createAsyncThunk(
  "School/Edit_Subject",
  async (payload) => {
    console.log(payload.id)
    const Subject_response = await axios.put( SUBJECT_ENDPOINT + '/' + payload.id, payload );
    return Subject_response.data;
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
    builder.addCase(getSchoolSubjectsList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = payload;
    });
    builder.addCase(getSchoolSubjectsDetail.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectDetail = payload;
    });
    builder.addCase(createSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addCase(delateSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList.data = state.SchoolSubjectList.SubjectList.data.filter((subject) => {
        return subject.id !== payload.id} )
    });
    builder.addCase(editSubject.fulfilled, (state, { payload }) => {
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

export default SchoolSlice;
