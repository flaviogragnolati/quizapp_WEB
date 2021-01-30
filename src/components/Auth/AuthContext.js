import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error(
      'useAuthState fuera de scope, tenes que llamarla dentro del provider'
    );
  }
  if (Object.keys(user).length === 0 && user.constructor === Object) {
    return null;
  }

  return user;
};
