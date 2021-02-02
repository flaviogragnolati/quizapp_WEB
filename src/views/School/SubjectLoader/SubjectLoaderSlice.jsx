// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { SUBJECT_ENDPOINT } from "utils/endpoints";
// import { status } from "utils/helpers";

// export const CreateSubject = createAsyncThunk(
//   "Subject/CreateSubject",
//   async (payload) => {
//     payload.schoolId = 1;
//     const Subject_response = await axios.post(SUBJECT_ENDPOINT, payload);
//     const { subject } = Subject_response;
//     return subject;
//   }
// );

// const initialState_SubjectLoader = {
//   subject: {},
//   status: status.idle,
//   materiaStatus: status.idle,
//   error: "",
// };

// const SubjectLoaderSlice = createSlice({
//   name: "Subject",
//   initialState: initialState_SubjectLoader,
//   reducers: {},
//   extraReducers: {
//     [CreateSubject.pending]: (state, { payload }) => {
//       state.status = status.pending;
//     },
//     [CreateSubject.fulfilled]: (state, { payload }) => {
//       state.status = status.success;
//     },
//     [CreateSubject.rejected]: (state, { payload }) => {
//       state.status = status.error;
//       state.error = payload;
//     },
//   },
// });

// export default SubjectLoaderSlice;