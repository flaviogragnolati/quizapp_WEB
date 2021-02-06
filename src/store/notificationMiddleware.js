import { ACTIONS } from './rootReducer';
import { getCatalogue } from 'views/Catalogue/catalogueSlice';
import { postUserToTeacher, removeTeacher } from 'views/School/SchoolSlice';
import { enrollUser } from 'views/Teacher/TeacherSlice';

//?Array para guardar todas las acciones que requiren de notificacion
const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

const allTypesAsync = (thunk) => {
  const status = ['pending', 'rejected', 'fulfilled'];
  const thunkActions = [];
  status.forEach((state) => thunkActions.push(thunk[state].type));
  return thunkActions;
};

const listenArray = [
  ACTIONS.favorites.addToFavorites.type,
  ACTIONS.favorites.removeFromFavorites.type,
  ACTIONS.actions.enroll.type,
  ACTIONS.catalogue.filter.type, //'catalogue/filter'
  ...allTypesAsync(getCatalogue),
  ...allTypesAsync(postUserToTeacher),
  ...allTypesAsync(removeTeacher),
  ...allTypesAsync(enrollUser),
]
const notificationMiddleware = (store) => (next) => (action) => {
  // const dispatch = store.dispatch;

  const snackbar = {
    message: '',
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'default', //info|error|success|warning|default
      preventDuplicate: true,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      // action: (key) => (
      //   <Button onClick={() => dispatch(closeSnackbar(key))}>X</Button>
      // ),
    },
  };
  if (listenArray.includes(action.type)) {
    //Si la accion es alguna de las que estamos esuchando:
    if (action.type.includes('favorites/add')) {
      snackbar.message = `Se agrego el curso a favoritos`;
      snackbar.options.variant = 'success';
    } else if (action.type.includes('favorites/remove')) {
      snackbar.message = `Se elimino el curso de favoritos`;
      snackbar.options.variant = 'warning';
    } else if (action.type.includes('actions/enroll')) {
      snackbar.message = `Te pedido ha sido enviado, recibiras una notificacion`;
      snackbar.options.variant = 'info';
    } else if (action.type.split('/')[1] === 'filter') {
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES SINCRONIAS
      snackbar.message = `Estas filtrando el catalogo`;
      snackbar.options.variant = 'success';
    } else if (action.type.includes('getCatalogue')) {
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES ASINCRONAS
      let state = action.type.split('/')[2];
      switch (state) {
        case PENDING:
          snackbar.message = 'estamos buscando';
          snackbar.options.variant = 'info';
          break;
        case FULFILLED:
          snackbar.message = 'toma la data guacshin';
          snackbar.options.variant = 'success';
          break;
        case REJECTED:
          snackbar.message = 'te re cabe logi no ten es nada de data!!!';
          snackbar.options.variant = 'error';
          break;
        default:
          break;
      }
    }else if (action.type.includes('postUserToTeacher')) {
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES ASINCRONAS
      let state = action.type.split('/')[2];
      switch (state) {
        case PENDING:
          snackbar.message = 'Modificando nivel de acceso';
          snackbar.options.variant = 'info';
          break;
        case FULFILLED:
          snackbar.message = 'Se promovio exitosamente a profesor';
          snackbar.options.variant = 'success';
          break;
        case REJECTED:
          snackbar.message = 'Ocurrio un error intente de nuevo';
          snackbar.options.variant = 'error';
          break;
        default:
          break;
      }
    }else if (action.type.includes('removeTeacher')) {
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES ASINCRONAS
      let state = action.type.split('/')[2];
      switch (state) {
        case PENDING:
          snackbar.message = 'Modificando nivel de acceso';
          snackbar.options.variant = 'info';
          break;
        case FULFILLED:
          snackbar.message = 'Se removio el nivel de acceso  profesor';
          snackbar.options.variant = 'success';
          break;
        case REJECTED:
          snackbar.message = 'Ocurrio un error intente de nuevo';
          snackbar.options.variant = 'error';
          break;
        default:
          break;
      }
    }else if (action.type.includes('enrollUser')) {
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES ASINCRONAS
      let state = action.type.split('/')[2];
      switch (state) {
        case PENDING:
          snackbar.message = 'Enviando solicitud de ingreso';
          snackbar.options.variant = 'info';
          break;
        case FULFILLED:
          snackbar.message = 'Solicitud de ingreso enviada exitosamente';
          snackbar.options.variant = 'success';
          break;
        case REJECTED:
          snackbar.message = 'Ocurrio un error intente de nuevo';
          snackbar.options.variant = 'error';
          break;
        default:
          break;
      }
    }
    store.dispatch(ACTIONS.notifications.enqueueSnackbar(snackbar));
  }

  return next(action);
};

export default notificationMiddleware;
