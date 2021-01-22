import { Button } from '@material-ui/core';
import store from 'store';
import { closeSnackbar } from 'views/Notifier/notificationSlice';

//?Array para guardar todas las acciones que requiren de notificacion
const listenArray = [];

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
      action: (key) => (
        <Button onClick={() => dispatch(closeSnackbar(key))}>X</Button>
      ),
    },
  };

  if (listenArray.includes(action.type)) {
    //Si la accion es alguna de las que estamos esuchando:
  }

  return next(action);
};
