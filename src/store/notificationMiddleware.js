import { ACTIONS } from './rootReducer';
import { getCatalogue } from 'views/Catalogue/catalogueSlice';
import { postUserToTeacher, removeTeacher, delateQuiz, delateSubject , editSubject , createSubject } from 'views/School/SchoolSlice';
import { enrollUser , enrollToSudent, getQuizesTeacher } from 'views/Teacher/TeacherSlice';
import { localLogin, restoreSession, localOrgLogin } from 'components/Auth/authSlice';

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
  ACTIONS.auth.logout.type,
  ACTIONS.catalogue.filter.type, //'catalogue/filter'
  ...allTypesAsync(getCatalogue),
  ...allTypesAsync(postUserToTeacher),
  ...allTypesAsync(removeTeacher),
  ...allTypesAsync(enrollUser),
  ...allTypesAsync(localLogin),
  ...allTypesAsync(localOrgLogin),
  ...allTypesAsync(restoreSession),
  ...allTypesAsync(delateQuiz),
  ...allTypesAsync(delateSubject),
  ...allTypesAsync(editSubject),
  ...allTypesAsync(createSubject),
]


const notificationMiddleware = (store) => (next) => (action) => {
  // const dispatch = store.dispatch;

  const allNotificationAsync = (fullfiled,pending,rejected)=>{

    let state = action.type.split('/')[2];
    switch (state) {
      case PENDING:
        snackbar.message = pending;
        snackbar.options.variant = 'info';
        break;
      case FULFILLED:
        snackbar.message = fullfiled;
        snackbar.options.variant = 'success';
        break;
      case REJECTED:
        snackbar.message = rejected;
        snackbar.options.variant = 'error';
        break;
      default:
        break;
    }
  }

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
    }else if (action.type === "auth/logout") {
      console.log('entre a la notificacion')
      //! EJEMPLOS DE NOTIFICACIONES EN ACCIONES SINCRONIAS
      snackbar.message = `se cerro la sesion correctamente`;
      snackbar.options.variant = 'success';
    } 
    else if (action.type.includes('getCatalogue')) {

      allNotificationAsync('tengo datos', 'esperando datos', 'ocurrio un error')
      
    }else if (action.type.includes('postUserToTeacher')) {

      allNotificationAsync('Se promovio exitosamente a profesor', 'Modificando nivel de acceso', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('removeTeacher')) {
      allNotificationAsync('Se removio el nivel de acceso  profesor', 'Modificando nivel de acceso', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('enrollUser')) {

      allNotificationAsync('Solicitud de ingreso enviada exitosamente', 'Enviando solicitud de ingreso', 'Ocurrio un error intente de nuevo')
    }else if (action.type.includes('localLogin')) {

      allNotificationAsync('se inicio sesion correctamente', 'Enviando solicitud de ingreso', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('localOrgLogin')) {

      allNotificationAsync('se inicio sesion correctamente como escuela', 'Enviando solicitud de ingreso', 'Ocurrio un error intente de nuevo')
    }
    else if (action.type.includes('restoreSession')) {

      allNotificationAsync('sesion restablecida exitosamente', 'Enviando solicitud de ingreso', 'Ocurrio un error intente de nuevo')
   
    }else if (action.type.includes('Delate_Quiz')) {

      allNotificationAsync('Se elimino exitosamente', 'cargando', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('Delate_Subject')) {

      allNotificationAsync('Se elimino exitosamente', 'cargando', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('Edit_Subject')) {

      allNotificationAsync('Se modifico exitosamente', 'cargando', 'Ocurrio un error intente de nuevo')

    }else if (action.type.includes('Create_Subject')) {

      allNotificationAsync('Se creo exitosamente', 'cargando', 'Ocurrio un error intente de nuevo')
    }
    store.dispatch(ACTIONS.notifications.enqueueSnackbar(snackbar));
  }

  return next(action);
};

export default notificationMiddleware;
