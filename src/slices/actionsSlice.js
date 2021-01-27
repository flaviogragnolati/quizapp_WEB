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
  },
});

export const { enroll } = actionsSlice.actions;

export default actionsSlice;
