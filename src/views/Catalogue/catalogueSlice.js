import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { QUIZ_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';

const initialState_Catalogue = {
  status: status.idle,
  cat: {},
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
        console.log('should not run again', catalogue);
        return false;
      }
    },
  }
);

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: initialState_Catalogue,
  reducers: {},
  extraReducers: {
    [getCatalogue.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [getCatalogue.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.cat = { ...payload };
    },
    [getCatalogue.rejected]: (state, { payload }) => {
      state.status = status.error;
    },
  },
});

export default catalogueSlice;
