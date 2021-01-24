
export const checkoutFields = {
  nameQuizz: {
    name: 'nameQuizz',
    label: 'Nombre Quizz*',
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
  cardName: {
    name: 'cardName',
    label: 'Nombre de titular*',
    requiredErrorMsg: 'Nombre y apellido de titular requerido',
    invalidErrorMsg: 'Nombre y apellido del titular inválido',
  },
  cardNumber: {
    name: 'cardNumber',
    label: 'Numero de tarjeta*',
    requiredErrorMsg: 'Numero de tarjeta requerido',
    invalidErrorMsg: 'Numero de tarjeta invalido',
  },
  expiryDate: {
    name: 'expDate',
    label: 'Válida hasta*',
    requiredErrorMsg: 'Debe indicar fecha de vencimiento',
    invalidErrorMsg: 'Fecha de vencimiento invalida',
  },
  cvv: {
    name: 'cvv',
    label: 'Código de seguridad*',
    requiredErrorMsg: 'CVV es requerido',
    invalidErrorMsg: 'Formato de CVV invalido',
  },
};

const {
  nameQuizz,
  descripcion,
  categoria,
  materia,
  zip,
  country,
  cardName,
  cardNumber,
  expiryDate,
  cvv,
} = checkoutFields;

export const initialState_Checkout = {
  //?QUIZZ INFO FORM
  [nameQuizz.name]: '',
  [descripcion.name]: '',
  [categoria.name]: '',
  [materia.name]: '',
  [zip.name]: '',
  [country.name]: '',
  //?PAYMENT FORM
  [cardName.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: '',
};
