import { convertFormikValuesToRedux } from 'utils/helpers';
import { updateQuestion } from 'views/QuizLoader/QuizLoaderSlice';
import React, { useContext, useEffect } from 'react';
import { IdsContext } from 'views/QuestionLoader/QuestionLoader';
import { useDispatch } from 'react-redux';

// export const useUpdateQuestion = (ref, qId) => {
//   const noop = () => null;
//   const dispatch = useDispatch();
//   const qContext = useContext(IdsContext);

//   useEffect(() => {}, []);
//   //Context error handling
//   if (!qContext)
//     throw new Error(
//       'Esta func solo puede ser utilizada dentro del contexto <IdsContext>'
//     );
//   let questionId;
//   if (typeof qId === 'undefined') {
//     let { questionId } = qContext;
//     console.log('QID->', questionId);
//     if (typeof questionId === 'undefined')
//       throw new Error('question Id no esta definido');
//     if (questionId === null) return noop;
//   } else questionId = qId;
//   console.log('Qid', questionId, qId);

//   //ref error handling
//   console.log('ref->', ref);
//   if (typeof ref === 'undefined')
//     throw new Error('No se ha recibido el arg ref');
//   if (ref === null) {
//     console.error('ref is null');
//     return noop;
//   }
//   const { questionInfoRef, answersContentRef } = ref;
//   const infoValues = questionInfoRef.current;
//   const ansValues = answersContentRef.current;
//   if (!infoValues && !ansValues) {
//     console.error(
//       'questionInfoRef.current & answersContentRef.current are not defined'
//     );
//     return noop;
//   }

//   //actual update dispatch
//   let questionData = {
//     info: infoValues && infoValues.values,
//     answers: ansValues && convertFormikValuesToRedux(ansValues.values),
//     questionId,
//   };
//   return (id) => {
//     if (id) questionData.questionId = id;
//     return dispatch(updateQuestion(questionData));
//   };
// };

export const updateQuestionData = (ref, questionId, dispatch) => {
  const noop = () => null;

  //question Id error handling
  if (typeof questionId === 'undefined')
    throw new Error('no se recibio el parametro questionId');
  if (!questionId) return noop; //en caso que sea null, string vacio o 0

  //ref error handling
  if (typeof ref === 'undefined')
    throw new Error('No se ha recibido el arg ref');
  const { questionInfoRef, answersContentRef } = ref;
  const infoValues = questionInfoRef.current;
  const ansValues = answersContentRef.current;
  if (!infoValues && !ansValues) {
    console.error(
      'questionInfoRef.current & answersContentRef.current are not defined'
    );
    return noop;
  }
  console.log('info', infoValues && infoValues.values);
  console.log('ans', ansValues && ansValues.values);

  //actual update dispatch
  let questionData = {
    info: infoValues && infoValues.values,
    answers: ansValues && convertFormikValuesToRedux(ansValues.values),
    questionId,
  };

  dispatch(updateQuestion(questionData));
};
