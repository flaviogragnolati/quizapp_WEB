//General or Global selectors
export const notificationSelector = (state) => state.notifications.list;

//Auth and User selectors
export const userSelector = (state) => state.auth.user;
export const authStatusSelector = (state) => state.auth.status;
export const tokenSelector = (state) => state.auth.token;
export const restoreSessionSelector = (state) => state.auth.restore;

//Profile selectors
export const UserProfileSelector = (state) => state.Profile.data
export const UserProfileStatusSelector = (state) => state.Profile.status

//School selectors
export const SchoolQuizListSelector = (state) => state.School.SchoolQuizList.QuizList
export const SchoolQuizListStatusSelector = (state) => state.School.status

export const SchoolSubjectListSelector = (state) => state.School.SchoolSubjectList.SubjectList.data
export const SchoolSubjectListStatusSelector = (state) => state.School.status