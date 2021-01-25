import { ACTIONS } from './rootReducer';
//?Array para guardar todas las acciones que requiren de notificacion

const listenArray = [
  ACTIONS.favorites.addToFavorites.type,
  ACTIONS.favorites.removeFromFavorites.type,
];

const notificationMiddleware = (store) => (next) => (action) => {
  const dispatch = store.dispatch;

  const snackbar = {
    message: '',
    options: {
      key: new Date().getTime() + Math.random(),
      variant: 'info',
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
    console.log('action.type', action.type);
    //Si la accion es alguna de las que estamos esuchando:
    if (action.type.includes('favorites/add')) {
      snackbar.message = `Se agrego el curso a favoritos`;
      snackbar.options.variant = 'success';
    } else if (action.type.includes('favorites/remove')) {
      snackbar.message = `Se elimino el curso de favoritos`;
      snackbar.options.variant = 'warning';
    }
    store.dispatch(ACTIONS.notifications.enqueueSnackbar(snackbar));
  }

  return next(action);
};

export default notificationMiddleware;
