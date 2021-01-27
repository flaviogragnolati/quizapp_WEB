import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  axios  from 'axios';


const initialState_user = {
    user: {
      info: {},
      orders: [],
      usersList: [],
      status: 'idle',
      error: null,

    },
  };
  
  export const createUser = createAsyncThunk('user/register', async (payload) => {
    const user_response = await axios.post('http://localhost:3000/auth/register', payload);
    // const { token } = user_response.data;
    // const resPayload = {
    //   userRegister_response: user_response.data,
    // //   formik,
    // //   token,
    // };
    return user_response;
  });



const notificationSlice = createSlice({
  name: 'user',
  initialState: initialState_user,
  reducers: {
  },
});

export const {
  enqueueSnackbar,
  closeSnackbar,
  clearSnackbar,
  removeSnackbar,
} = notificationSlice.actions;

export default notificationSlice;
