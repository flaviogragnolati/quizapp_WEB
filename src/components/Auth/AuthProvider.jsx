import React, { useEffect } from 'react';
import { AuthContext } from 'components/Auth/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import {
  userSelector,
  authStatusSelector,
  tokenSelector,
  restoreSessionSelector,
} from 'utils/selectors';
import { ACTIONS } from 'store/rootReducer';
import { restoreSession } from './authSlice';
import BackdropLoading from 'components/Loading/BackdropLoading';

//!DESCOMENTAR PARA HABILITAR DESLOGEO DE MULTIPLES TABS
// window.addEventListener('storage', (event) => {
//   if (event.key === '__logout__') {
//     dispatch(ACTIONS.auth.deleteToken());
//   }
// });
function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);
  const authStatus = useSelector(authStatusSelector);
  const token = useSelector(tokenSelector);
  const restore = useSelector(restoreSessionSelector);

  useEffect(() => {
    if (authStatus === 'idle' && !token) {
      dispatch(ACTIONS.auth.restoreToken());
      // dispatch(ACTIONS.auth.setToken('xxxxxxxxx')); //lo estamos seteando manual para simular que recupera una sesion
    }
    if (token && !restore && authStatus !== 'pending') {
      dispatch(restoreSession());
    }
  }, [authStatus, token, restore, dispatch]);
  return (
    <AuthContext.Provider value={user}>
      {children}
      {authStatus === 'pending' && <BackdropLoading />}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
