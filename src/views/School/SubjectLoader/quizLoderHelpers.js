export const subjectModel = {
  name: {
    name: 'name',
    label: 'Nombre Materia*',
    requiredErrorMsg: 'Nombre requerido',
    minErrorMsg: 'Nombre debe ser > 2 caracteres',
  },
  descripcion: {
    name: 'descripcion',
    label: 'Descripcion*',
    requiredErrorMsg: 'Descripcion requerida',
  },
};

const { name, descripcion} = subjectModel;

export const initialState_Subjects = {
  [name.name]: '',
  [descripcion.name]: '',
};
