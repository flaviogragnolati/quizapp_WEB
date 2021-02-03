import { createSelector } from '@reduxjs/toolkit';

//General or Global selectors
export const notificationSelector = (state) => state.notifications.list;

//Auth and User selectors
export const userSelector = (state) => state.auth.user;
export const authStatusSelector = (state) => state.auth.status;
export const tokenSelector = (state) => state.auth.token;
export const restoreSessionSelector = (state) => state.auth.restore;

//Quiz selectors
export const QuizSchoolSelector = (state) => state.QuizInfo.QuizSchool;
export const QuizSchoolStatusSelector = (state) => state.QuizInfo.status;

//Catalogue Selectors
export const catalogueStatusSelector = (state) => state.catalogue.status;
export const allCatalogueEntitiesSelector = (state) => state.catalogue.entities;
export const allCatalogueResultSelector = (state) => state.catalogue.result;
export const quizzesSelector = (state) => state.catalogue.entities.quizzes;
export const quizTagsSelector = (state) => state.catalogue.entities.quizTags;
export const reviewsSelector = (state) => state.catalogue.entities.reviews;
export const schoolsSelector = (state) => state.catalogue.entities.schools;
export const subjectsSelector = (state) => state.catalogue.entities.subjects;
export const catalogueFilterSelector = (state) => state.catalogue.filter;

//Quiz Detail Selectors
export const quizDetailStatusSelector = (state) => state.quizDetail.status;
export const quizDetailSelector = (state, id) => state.quizDetail.detail[id];
// export const selectQuizDetailById = createSelector(
//   [
//     quizzesSelector,
//     quizTagsSelector,
//     reviewsSelector,
//     schoolsSelector,
//     subjectsSelector,
//     (_, id) => id,
//   ],
//   (quizzes, tags, reviews, schools, subjects, id) => {
//     let quizDetail = { ...quizzes[id] };
//     //chequeamos que los campos que pueden ser nulos, y deberian devolver un array, no sean nulos, en ese caso le asignamos un array vacio
//     //en caso de no recibir un array, lo casteamos a array
//     if (quizDetail.Reviews == null) {
//       quizDetail.Reviews = [];
//     } else {
//       console.log(quizDetail);
//       quizDetail.Reviews = Array.isArray(quizDetail.Reviews)
//         ? quizDetail.Reviews
//         : [quizDetail.Reviews];
//     }

//     if (quizDetail.QuizTags == null) {
//       quizDetail.QuizTags = [];
//     } else {
//       quizDetail.QuizTags = Array.isArray(quizDetail.QuizTags)
//         ? quizDetail.QuizTags
//         : [quizDetail.QuizTags];
//     }

//     const subjectInfo = subjects[quizDetail.Subject];
//     const schoolInfo = schools[quizDetail.School];
//     const reviewsInfo = quizDetail.Reviews.map((reviewId) => reviews[reviewId]);
//     const quizTagsInfo = quizDetail.QuizTags.map((quizId) => tags[quizId]);

//     quizDetail.Subject = subjectInfo;
//     quizDetail.School = schoolInfo;
//     quizDetail.Reviews = reviewsInfo;
//     quizDetail.QuizTags = quizTagsInfo;

//     return quizDetail;
//   }
// );

//Profile selectors
export const ProfileSelector = (state) => state.Profile.data;
export const ProfileStatusSelector = (state) => state.Profile.status;

//School selectors
export const SchoolQuizSelector = (state) => state.School.SchoolQuizList.QuizList;
export const SchoolQuizStatusSelector = (state) => state.School.status;
export const SchoolSubjectDetailSelector = (state) => state.School.SchoolSubjectList.SubjectDetail;
export const SchoolSubjectSelector = (state) => state.School.SchoolSubjectList.SubjectList;
export const SchoolSubjectStatusSelector = (state) => state.School.status;

//Quiz selector
export const QuestionsSelector = (state) => state.QuizLoader.questions;
export const QuestionsStatusSelector = (state) => state.status;


