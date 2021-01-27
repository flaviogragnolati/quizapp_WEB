export const quizModel = {
  nameQuiz: {
    name: 'nameQuiz',
    label: 'Nombre Quiz*',
    requiredErrorMsg: 'Nombre requerido',
    minErrorMsg: 'Nombre debe ser > 2 caracteres',
  },
  descripcion: {
    name: 'descripcion',
    label: 'Descripcion*',
    requiredErrorMsg: 'Descripcion requerida',
  },
  tags: {
    name: 'tag',
    label: 'Tags*',
    requiredErrorMsg: 'Debe ingresar una categoria',
  },
  materia: {
    name: 'materia',
    label: 'Materia*',
    requiredErrorMsg: 'Debe ingresar materia',
  },
};

const { nameQuiz, descripcion, tags, materia } = quizModel;

export const initialState_Quiz = {
  [nameQuiz.name]: '',
  [descripcion.name]: '',
  [tags.name]: '',
  [materia.name]: '',
};
