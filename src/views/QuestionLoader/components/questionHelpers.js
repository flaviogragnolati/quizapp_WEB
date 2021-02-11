import { convertFormikValuesToRedux } from 'utils/helpers';
import { updateQuestion } from 'views/QuizLoader/QuizLoaderSlice';

export const updateQuestionData = (ref, questionId, dispatch) => {
  const { questionInfoRef, answersContentRef } = ref;
  const questionData = {
    info: questionInfoRef.current.values,
    answers: convertFormikValuesToRedux(answersContentRef.current.values),
    questionId,
  };
  dispatch(updateQuestion(questionData));
};
