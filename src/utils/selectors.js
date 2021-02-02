//General or Global selectors
export const notificationSelector = (state) => state.notifications.list;

//Auth and User selectors
export const userSelector = (state) => state.auth.user;
export const authStatusSelector = (state) => state.auth.status;
export const tokenSelector = (state) => state.auth.token;
export const restoreSessionSelector = (state) => state.auth.restore;

//Quiz selectors
export const QuizSchoolSelector = (state) => state.QuizInfo.QuizSchool
export const QuizSchoolStatusSelector = (state) => state.QuizInfo.status

//Profile selectors
export const UserProfileSelector = (state) => state.Profile.data
export const UserProfileStatusSelector = (state) => state.Profile.status

//School selectors
export const SchoolQuizListSelector = (state) => state.School.SchoolQuizList.QuizList
export const SchoolQuizListStatusSelector = (state) => state.School.status