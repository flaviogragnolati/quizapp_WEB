import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { status } from 'utils/helpers';
import axios from 'axios';
import { USER_PROFILE_ENDPOINT, SCHOOL_ENDPOINT } from 'utils/endpoints';

const initialState_Profile = {
  status: status.idle,
  error: null,
  user: {},
  school: {},
};

export const getUserData = createAsyncThunk(
  'profile/getUserData',
  async (payload) => {
    //! estamos trayendo info que nos vamos a usar y es `privada`
    //! hay que modificar la ruta (o crear una nueva) que solo envie informacion publica
    const userData_response = await axios.get(USER_PROFILE_ENDPOINT + payload);
    return userData_response.data;
  }
);
export const getSchoolData = createAsyncThunk(
  'profile/getSchoolData',
  async (payload) => {
    const schoolData_response = await axios.get(
      SCHOOL_ENDPOINT + '/' + payload
    );
    return schoolData_response.data;
  }
);

const isRejectedAction = isRejected(getUserData);
const isPendingAction = isPending(getUserData);

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState_Profile,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.user = payload;
    });
    builder.addCase(getSchoolData.fulfilled, (state, { payload }) => {
      state.status = status.success;
      state.school = payload;
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

export default profileSlice;
