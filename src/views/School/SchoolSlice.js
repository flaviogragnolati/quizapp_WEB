import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import {
  SCHOOL_ENDPOINT,
  SUBJECT_ENDPOINT,
  QUIZ_ENDPOINT,
  GET_USER_EMAIL_ENDPOINT,
  TEACHER_ENDPOINT,
} from 'utils/endpoints';

const initialState_School = {
  //!el `status` general no esta definido, y en los extrareducers lo estamos `creando`, si es parte del estado deberia estar presente como parte del `initialState`
  SchoolQuizList: {
    error: null,
    QuizList: {},
    status: status.idle,
  },
  SchoolSubjectList: {
    error: null,
    SubjectList: [],
    // SubjectDetail: {},
  },
  UserDetail: {
    data: {},
    role: {},
    status: status.idle,
  },
};

//GET

export const getQuizList = createAsyncThunk(
  'school/getQuizList',
  async (payload) => {
    const allQuizzes_response = await axios.get(
      SCHOOL_ENDPOINT + '/' + payload + '/quizzes'
    );
    return allQuizzes_response.data;
  }
);

export const getSubjectsList = createAsyncThunk(
  'school/getSubjectsList',
  async () => {
    const Subject = await axios.get(SCHOOL_ENDPOINT + 1 + '/subjects');
    return Subject.data;
  }
);

export const getUserEmail = createAsyncThunk(
  'school/getUserEmail',
  async ({ Id, email }) => {
    const User_Email_response = await axios.get(
      GET_USER_EMAIL_ENDPOINT + Id + '?email=' + email
    );
    return User_Email_response.data;
  }
);

//POST

export const createSubject = createAsyncThunk(
  'school/createSubject',
  async (payload) => {
    payload.SchoolId = 1;
    const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
    const { subject } = Subject_response;
    return subject;
  }
);

export const postUserToTeacher = createAsyncThunk(
  'school/postUserToTeacher',
  async ({ QuizId, UserId }) => {
    const User_Email_response = await axios.post(TEACHER_ENDPOINT, {
      QuizId,
      UserId,
    });
    return User_Email_response.data;
  }
);

//DELETE

export const delateSubject = createAsyncThunk(
  'school/delateSubject',
  async (payload) => {
    const delete_response = await axios.delete(
      SUBJECT_ENDPOINT + '/' + payload
    );
    return delete_response.data;
  }
);

export const delateQuiz = createAsyncThunk(
  'school/delateQuiz',
  async (payload) => {
    const delete_response = await axios.delete(QUIZ_ENDPOINT + '/' + payload);
    return delete_response.data;
  }
);

export const removeTeacher = createAsyncThunk(
  'school/removeTeacher',
  async ({ QuizId, UserId }) => {
    const delete_response = await axios.delete(
      TEACHER_ENDPOINT + '?UserId=' + UserId + '&&QuizId=' + QuizId
    );
    return delete_response.data;
  }
);

//PUT

export const editSubject = createAsyncThunk(
  'school/editSubject',
  async (payload) => {
    console.log(payload.id);
    const Subject_response = await axios.put(
      SUBJECT_ENDPOINT + '/' + payload.id,
      payload
    );
    return Subject_response.data;
  }
);

const isPendingAction = isPending(
  getQuizList,
  getSubjectsList,
  createSubject,
  delateSubject,
  delateQuiz,
  editSubject
);

const isRejectedAction = isRejected(
  getQuizList,
  getSubjectsList,
  createSubject,
  delateSubject,
  delateQuiz,
  editSubject
);

const isPendingActionDetail = isPending(
  getUserEmail,
  postUserToTeacher,
  removeTeacher
);

const isRejectedActionDetail = isRejected(
  getUserEmail,
  postUserToTeacher,
  removeTeacher
);

const SchoolSlice = createSlice({
  name: 'school',
  initialState: initialState_School,
  reducers: {
    cleanUser: (state, { payload }) => {
      state.UserDetail.status = status.idle;
      state.UserDetail.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizList.fulfilled, (state, { payload }) => {
      state.SchoolQuizList.status = status.success;
      state.SchoolQuizList.QuizList = payload.quizzes.byId;
    });
    builder.addCase(getSubjectsList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = payload;
    });
    builder.addCase(getUserEmail.fulfilled, (state, { payload }) => {
      state.UserDetail.role = payload.role;
      state.UserDetail.data = payload.user;
      state.UserDetail.status = status.success;
    });
    builder.addCase(createSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addCase(postUserToTeacher.fulfilled, (state, { payload }) => {
      state.UserDetail.status = status.success;
      state.UserDetail.role = payload.role;
    });
    builder.addCase(delateSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = state.SchoolSubjectList.SubjectList.filter(
        (subject) => {
          return subject.id !== payload.id;
        }
      );
    });
    builder.addCase(delateQuiz.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolQuizList.QuizList = state.SchoolQuizList.QuizList.filter(
        (quiz) => {
          return quiz.id !== payload.id;
        }
      );
    });
    builder.addCase(removeTeacher.fulfilled, (state, { payload }) => {
      state.UserDetail.status = status.idle;
      state.UserDetail.data = {};
      state.UserDetail.role = {};
    });
    builder.addCase(editSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });

    ////////////
    builder.addMatcher(isPendingAction, (state, action) => {
      const { type } = action;
      const nameSpace = type.split('/')['1'];
      if (nameSpace === 'SchoolQuizList') {
        //!desprolijo, complejo e innecesario...pero para no cambiar todo lo hacemos asi, para la prox...mejor estrategia de `namespaces`
        state.SchoolQuizList.status = status.pending;
      } else {
        state.status = status.pending;
      }
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      const { type } = action;
      const nameSpace = type.split('/')['1'];
      if (nameSpace === 'SchoolQuizList') {
        //!desprolijo, complejo e innecesario...pero para no cambiar todo lo hacemos asi, para la prox...mejor estrategia de `namespaces`
        state.SchoolQuizList.status = status.error;
        state.SchoolQuizList.error = action.payload;
      } else {
        state.status = status.error;
        state.error = action.payload;
      }
    });
    builder.addMatcher(isPendingActionDetail, (state, { payload }) => {
      state.UserDetail.status = status.pending;
    });
    builder.addMatcher(isRejectedActionDetail, (state, { payload }) => {
      state.UserDetail.status = status.error;
      state.UserDetail.data = payload;
    });
  },
});

export const { cleanUser, setQuestionDetail } = SchoolSlice.actions;

export default SchoolSlice;
