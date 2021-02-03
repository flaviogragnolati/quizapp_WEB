import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { QUIZ_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';

const initialState_Catalogue = {
  status: status.idle,
  entities: {},
  result: '',
  filter: false,
};

export const getCatalogue = createAsyncThunk(
  'catalogue/getCatalogue',
  async (payload, thunkApi) => {
    const catalogue_response = await axios.get(QUIZ_ENDPOINT);
    return catalogue_response.data;
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
      state.filter = !state.filter;
    },
  },
  extraReducers: {
    [getCatalogue.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [getCatalogue.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.entities = payload.entities;
      state.result = [...new Set(payload.result)];
      // for (const key in payload) {
      //   if (Object.hasOwnProperty.call(payload, key)) {
      //     const element = payload[key];
      //     state[key] = element;
      //   }
      // }
    },
    [getCatalogue.rejected]: (state, { payload }) => {
      state.status = status.error;
    },
  },
});

export default catalogueSlice;
