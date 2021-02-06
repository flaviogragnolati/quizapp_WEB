import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { COUNT_QUIZ_ENDPOINT } from 'utils/endpoints';
import { QUIZ_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';

const initialState_Catalogue = {
  status: status.idle,
  entities: {},
  result: '',
  total: '',
  filter: false,
  filteredResult: '',
};

export const getCatalogue = createAsyncThunk(
  'catalogue/getCatalogue',
  async (payload, thunkApi) => {
    const { page, pageSize } = payload;
    const catalogue_response = await axios.get(QUIZ_ENDPOINT, {
      params: { page, pageSize },
    });
    const totalQuizzes = await axios.get(COUNT_QUIZ_ENDPOINT);
    console.log('total quizzes', totalQuizzes);
    const returnPayload = {
      ...catalogue_response.data,
      total: totalQuizzes.data,
    };
    return returnPayload;
  },
  {
    condition: (payload, { getState }) => {
      const { catalogue } = getState();
      if (
        catalogue.status === status.pending ||
        catalogue.status === status.loading ||
        catalogue.status === status.error ||
        catalogue.status === status.success
      ) {
        return false;
      }
    },
  }
);

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: initialState_Catalogue,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    filter: (state, { payload }) => {
      let filteredCatalogue = [];

      const { school, subject, quiz, tag } = payload;
      //traemos los arrays de cada filterGroup
      let schoolResult =
        school && school.length && school.map((school) => school.id);
      let subjectResult =
        subject && subject.length && subject.map((subject) => subject.id);
      let quizResult = quiz && quiz.length && quiz.map((quiz) => quiz.id);
      let tagResult = tag && tag.length && tag.map((tag) => tag.id);
      // console.log('schoolResult', schoolResult);
      // console.log('subjectResult', subjectResult);
      // console.log('quizResult', quizResult);
      // console.log('tagResult', tagResult);
      state.result.forEach((id, idx) => {
        let entity = state.entities.quizzes[id];
        // console.log('ENTITY', entity, typeof entity.QuizTags);
        if (
          (schoolResult && schoolResult.includes(entity.School)) ||
          (subjectResult && subjectResult.includes(entity.Subject)) ||
          (quizResult && quizResult.includes(entity.id))
        ) {
          filteredCatalogue.push(id);
        }
        let quizTags = Array.isArray(entity.QuizTags)
          ? entity.QuizTags
          : [entity.QuizTags];
        if (!!entity.QuizTags && tagResult) {
          tagResult.forEach((tagId) => {
            if (quizTags.includes(tagId)) {
              filteredCatalogue.push(id);
            }
          });
        }
      });
      console.log(filteredCatalogue);
      state.filteredResult = [...new Set(filteredCatalogue)];
    },
    clearFilter: (state, { payload }) => {
      state.filter = false;
    },
  },
  extraReducers: {
    [getCatalogue.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [getCatalogue.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.entities = payload.entities;
      state.result = [...new Set(payload.result)].sort((a, b) => a - b);
      state.total = payload.total;
    },
    [getCatalogue.rejected]: (state, { payload }) => {
      state.status = status.error;
    },
  },
});

export default catalogueSlice;
