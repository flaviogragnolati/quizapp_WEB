import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { status } from "utils/helpers";
import axios from "axios";
import { SCHOOL_ENDPOINT, SUBJECT_ENDPOINT, QUIZ_ENDPOINT, GET_USER_EMAIL_ENDPOINT, TEACHER_ENDPOINT } from "utils/endpoints";

const initialState_School = {
  SchoolQuizList: {
    error: null,
    QuizList: {},
  },
  SchoolSubjectList: {
    error: null,
    SubjectList: [],
    // SubjectDetail: {},
  },
  UserDetail:{
    data: {},
    role: {},
    status: 'idle',
  }
};

//GET

export const getQuizList = createAsyncThunk("school/GetQuizList", async () => {
  const Quiz = await axios.get(SCHOOL_ENDPOINT + 1 + "/quizzes");
  return Quiz;
});

export const getSubjectsList = createAsyncThunk(
  "School/GetSubjectsList",
  async () => {
    const Subject = await axios.get(SCHOOL_ENDPOINT + 1 + "/subjects");
    return Subject.data;
  }
);

export const getUserEmail = createAsyncThunk(
  "School/getUserEmail",
  async ({Id, email}) => {
    const User_Email_response = await axios.get(GET_USER_EMAIL_ENDPOINT + Id + '?email=' + email);
    return User_Email_response.data ;
  }
);

// export const getSubjectsDetail = createAsyncThunk(
//   "School/GetSubjectsDetail",
//   async (payload) => {
//     const Subject = await axios.get(SUBJECT_ENDPOINT + '/' + payload);
//     return Subject;
//   }
// );

//POST

export const createSubject = createAsyncThunk(
  "School/Create_Subject",
  async (payload) => {
    payload.SchoolId = 1;
    const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
    const { subject } = Subject_response;
    return subject;
  }
);

export const postUserToTeacher = createAsyncThunk(
  "School/postUserToTeacher",
  async ({QuizId, UserId}) => {
    const User_Email_response = await axios.post(TEACHER_ENDPOINT, {QuizId , UserId});
    return User_Email_response.data ;
  }
);

//DELETE

export const delateSubject = createAsyncThunk(
  "School/Delate_Subject",
  async (payload) => {
    const delete_response = await axios.delete(SUBJECT_ENDPOINT + "/" + payload);
    return delete_response.data;
  }
);

export const delateQuiz = createAsyncThunk(
  "School/Delate_Quiz",
  async (payload) => {
    const delete_response = await axios.delete(QUIZ_ENDPOINT + "/" + payload);
    return delete_response.data;
  }
);

export const removeTeacher = createAsyncThunk(
  "School/removeTeacher",
  async ({QuizId , UserId}) => {
    const delete_response = await axios.delete(TEACHER_ENDPOINT + '?UserId=' + UserId + '&&QuizId=' + QuizId);
    return delete_response.data;
  }
);

//PUT

export const editSubject = createAsyncThunk(
  "School/Edit_Subject",
  async (payload) => {
    console.log(payload.id);
    const Subject_response = await axios.put(
      SUBJECT_ENDPOINT + "/" + payload.id,
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
  editSubject,
);

const isRejectedAction = isRejected(
  getQuizList,
  getSubjectsList,
  createSubject,
  delateSubject,
  delateQuiz,
  editSubject,
);

const isPendingActionDetail = isPending(
  getUserEmail,
  postUserToTeacher,
  removeTeacher,
);

const isRejectedActionDetail = isRejected(
  getUserEmail,
  postUserToTeacher,
  removeTeacher,
);

const SchoolSlice = createSlice({
  name: "school",
  initialState: initialState_School,
  reducers: {
    cleanUser: (state, { payload }) => {
      state.UserDetail.status = status.idle;
      state.UserDetail.data = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolQuizList.QuizList = payload.data.quizzes.byId;
    });
    builder.addCase(getSubjectsList.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.SchoolSubjectList.SubjectList = payload;
    });
    builder.addCase(getUserEmail.fulfilled, (state, { payload }) => {
      state.UserDetail.role = payload.role
      state.UserDetail.data = payload.user;  
      state.UserDetail.status = status.success;
    });
    builder.addCase(createSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addCase(postUserToTeacher.fulfilled, (state, { payload }) => {
      state.UserDetail.status = status.success;
      state.UserDetail.role = payload.role
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
      state.UserDetail.data = {}
      state.UserDetail.role = {}
    });
    builder.addCase(editSubject.fulfilled, (state, { payload }) => {
      state.status = status.success;
    });

    ////////////

    builder.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
    builder.addMatcher(isPendingActionDetail, (state, { payload }) => {
      state.UserDetail.status = status.pending;
    });
    builder.addMatcher(isRejectedActionDetail, (state, { payload }) => {
      state.UserDetail.status = status.error;
      state.UserDetail.data = payload
    });
  },
});

export const { cleanUser  } = SchoolSlice.actions

export default SchoolSlice;