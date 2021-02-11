export const questionLoaderModel = {
  title: {
    name: 'title',
    label: 'Title*',
    requiredErrorMsg: 'Title is required',
    minErrorMsg: 'Title must be >2 chars',
  },
  question: {
    name: 'question',
    label: 'Question*',
    requiredErrorMsg: 'Question cannot be blank',
  },
  answer: {
    name: 'answer',
    label: 'Answer*',
    requiredErrorMsg: 'Cannot pass blank answer',
  },
};

const { title, question, answer } = questionLoaderModel;

export const initialState_questionLoader = {
  [title.name]: '',
  [question.name]: '',
  [answer.name]: '',
};
