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
  categoria: {
    name: 'categoria',
    label: 'Categoria*',
    requiredErrorMsg: 'Debe ingresar una categoria',
  },
  materia: {
    name: 'materia',
    label: 'Materia*',
    requiredErrorMsg: 'Debe ingresar materia',
  },
  zip: {
    name: 'zip',
    label: 'Codigo Postal*',
    requiredErrorMsg: 'CP requerido',
    invalidErrorMsg: 'Codigo postal invalido',
  },
  country: {
    name: 'country',
    label: 'Pais*',
    requiredErrorMsg: 'Debe indicar el pais',
  },
};

const { nameQuiz, descripcion, categoria, materia, zip, country } = quizModel;

export const initialState_Quiz = {
  //?QUIZ INFO FORM
  [nameQuiz.name]: '',
  [descripcion.name]: '',
  [categoria.name]: '',
  [materia.name]: '',
  [zip.name]: '',
  [country.name]: '',
};
