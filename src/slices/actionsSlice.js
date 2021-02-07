import { createSlice } from '@reduxjs/toolkit';
import { status } from 'utils/helpers';

const initialState_Actions = {
  info: {},
  status: status.idle,
};

const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialState_Actions,
  reducers: {
    enroll: (state, payload) => {},
    addToFavorites: (state, action) => {},
    removeFromFavorites: (state, action) => {},
  },
});

export const {
  enroll,
  addToFavorites,
  removeFromFavorites,
} = actionsSlice.actions;

export default actionsSlice;
