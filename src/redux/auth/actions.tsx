import { LOGIN, LOGOUT } from './reducer'

export const loginAction = ({ username }: any) => ({
  type: LOGIN,
  username,
});

export const logoutAction = () => ({ type: LOGOUT });

