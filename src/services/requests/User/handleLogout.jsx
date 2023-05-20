import * as actions from '../../../store/modules/auth/actions';

const handleLogout = (e, dispatch, navigate) => {
  e.preventDefault();
  dispatch(actions.LoginFailure());
  navigate('/login');
};
export default handleLogout;
