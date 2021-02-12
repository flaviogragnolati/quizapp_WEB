import {
  createAsyncThunk,
  createSlice,
  current,
  isPending,
  isFulfilled,
  isRejected,
  isAsyncThunkAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { QUESTIONS_BULKUPDATE_ENDPOINT } from 'utils/endpoints';
import { QUESTIONS_ENDPOINT } from 'utils/endpoints';
import { QUIZ_ENDPOINT, ANSWERS_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';

const initialState_QuizLoader = {
  Quiz: {},
  status: status.idle,
  saved: false,
  bulkUpdate: false,
  questions: [],
  toDelete: {
    questions: [],
    answers: {},
  },
  error: '',
};

export const CreateQuiz = createAsyncThunk(
  'Quiz/CreateQuiz',
  async (payload) => {
    const QuizCreate_response = await axios.post(QUIZ_ENDPOINT, payload);
    const { quiz } = QuizCreate_response;
    return quiz;
  }
);

export const getAllQuestions = createAsyncThunk(
  'Quiz/getAllQuestions',
  async (payload) => {
    const Questions_response = await axios.get(QUIZ_ENDPOINT + '/' + payload);
    return Questions_response.data.questions.byId;
  },
  {
    condition: (payload, { getState }) => {
      const { QuizLoader } = getState();
      if (QuizLoader.state === status.pending) return false;
    },
  }
);

export const bulkUpdateQuestions = createAsyncThunk(
  'Quiz/bulkUpdateQuestions',
  async ({ quizId }, { getState }) => {
    const state = getState();
    const questions = state.QuizLoader.questions;
    const toDelete = state.QuizLoader.toDelete;
    const payload = {
      quizId,
      questions,
      toDelete,
    };
    const bulkUpdate_response = await axios.post(
      QUESTIONS_BULKUPDATE_ENDPOINT,
      payload
    );
    return bulkUpdate_response;
  }
);

const isPendingAction = isPending(
  CreateQuiz,
  getAllQuestions,
  bulkUpdateQuestions
);
const isFulfilledAction = isFulfilled(
  CreateQuiz,
  getAllQuestions,
  bulkUpdateQuestions
);
const isRejectedAction = isRejected(
  CreateQuiz,
  getAllQuestions,
  bulkUpdateQuestions
);

const isNotAsync = (action) => {
  const isAThunkAction = isAsyncThunkAction(
    CreateQuiz,
    getAllQuestions,
    bulkUpdateQuestions
  );
  if (!isAThunkAction(action)) return true;
  else return false;
};

const QuizLoaderSlice = createSlice({
  name: 'Quiz',
  initialState: initialState_QuizLoader,
  reducers: {
    addAnswer: (state, { payload }) => {
      const { id, questionId } = payload;
      const question = state.questions.find(
        (question) => questionId === question.id
      );
      if (!question) return;
      question.Answers.push({ id, text: '', correct: false });
    },
    removeAnswer: (state, { payload }) => {
      const { questionId, ansId } = payload;
      const toDeleteAnswers = state.toDelete.answers;

      const questionIdx = state.questions.findIndex(
        ({ id }) => String(id) === String(questionId)
      );
      if (questionIdx === -1) return;
      if (!Array.isArray(toDeleteAnswers[questionId]))
        toDeleteAnswers[questionId] = [];
      toDeleteAnswers[questionId].push(ansId);
      const question = state.questions[questionIdx];
      const filteredAns = question.Answers.filter(
        ({ id }) => String(id) !== String(ansId)
      );
      state.questions[questionIdx].Answers = filteredAns;
    },
    updateQuestion: (state, { payload }) => {
      const { info, answers, questionId } = payload;
      const questionIdx = state.questions.findIndex(
        (question) => String(question.id) === String(questionId)
      );
      if (!questionIdx === -1) return;
      let question = state.questions[questionIdx];
      if (info) {
        question.title = info.title;
        question.question = info.question;
      }
      if (answers) {
        question.Answers = answers;
      }
    },
    addQuestion: (state, { payload }) => {
      const { question } = payload; //por ahora lo mandamos como obj por si mas adelante hay que pasar algun otro dato
      state.questions.push(question);
    },
    removeQuestion: (state, { payload }) => {
      state.toDelete.questions.push(payload);
      state.questions = state.questions.filter(
        ({ id }) => String(id) !== String(payload)
      );
    },
    updateAll: (state, { payload }) => {
      const { questions } = payload;
      state.questions = questions; //por ahora pisamos directamente el estado,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllQuestions.fulfilled.type, (state, { payload }) => {
      state.questions = payload;
      state.saved = true;
    });
    builder.addCase(
      bulkUpdateQuestions.fulfilled.type,
      (state, { payload }) => {
        state.bulkUpdate = true;
        state.save = true;
      }
    );
    builder.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    builder.addMatcher(isFulfilledAction, (state, { payload }) => {
      state.status = status.success;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
    builder.addMatcher(isNotAsync, (state, { payload }) => {
      state.saved = false;
      state.bulkUpdate = false;
    });
  },
});
export const {
  addAnswer,
  updateQuestion,
  addQuestion,
  removeQuestion,
  removeAnswer,
} = QuizLoaderSlice.actions;
export default QuizLoaderSlice;

// export const CreateQuestion = createAsyncThunk(
//   'Quiz/CreateQuestion',
//   async (payload) => {
//     payload.modifiedBy = 1;
//     payload.createdBy = 1;
//     const QuestionCreate_response = await axios.post(
//       QUESTIONS_ENDPOINT,
//       payload
//     );
//     const { quiz } = QuestionCreate_response;
//     return quiz;
//   }
// );

// export const UpdateQuestion = createAsyncThunk(
//   'Quiz/UpdateQuestion',
//   async (payload) => {
//     payload.modifiedBy = 1;
//     payload.createdBy = 1;
//     const UpdateQuestion_response = await axios.put(
//       QUESTIONS_ENDPOINT + '/' + payload.id,
//       payload
//     );
//     return UpdateQuestion_response.data;
//   }
// );
// export const UpdateAnswers = createAsyncThunk(
//   'Quiz/UpdateAnswers',
//   async (payload) => {
//     console.log('ESTO LE MANDO', payload);
//     const UpdateAnswers_response = await axios.put(
//       ANSWERS_ENDPOINT + '/' + payload.id,
//       payload
//     );
//     return UpdateAnswers_response.data;
//   }
// );

// export const DeleteAnswers = createAsyncThunk(
//   'Quiz/DeleteAnswers',
//   async (id) => {
//     console.log('ESTO LE MANDO', id);
//     const DeleteAnswers_response = await axios.delete(
//       ANSWERS_ENDPOINT + '/' + id
//     );
//     return DeleteAnswers_response.data;
//   }
// );

// export const CreateAnswers = createAsyncThunk(
//   'Quiz/CreateAnswers',
//   async (payload) => {
//     const CreateAnswers_response = await axios.post(ANSWERS_ENDPOINT, payload);
//     return CreateAnswers_response.data;
//   }
// );
// export const deleteQuestion = createAsyncThunk(
//   'Quiz/deleteQuestion',
//   async (payload) => {
//     const Questions_response = await axios.delete(
//       QUESTIONS_ENDPOINT + '/' + payload
//     );
//     return Questions_response.data;
//   }
// );

// [CreateQuestion.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [CreateQuestion.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [CreateQuestion.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//     [deleteQuestion.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [deleteQuestion.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [deleteQuestion.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//     [UpdateQuestion.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [UpdateQuestion.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [UpdateQuestion.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//     [UpdateAnswers.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [UpdateAnswers.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [UpdateAnswers.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//     [DeleteAnswers.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [DeleteAnswers.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [DeleteAnswers.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//     [CreateAnswers.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [CreateAnswers.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [CreateAnswers.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
