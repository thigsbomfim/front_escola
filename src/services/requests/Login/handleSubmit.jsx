import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../../store/modules/auth/actions';

const handleSubmit = async ({
  email,
  password,
  prevPath,
  navigate,
  dispatch,
}) => {
  let formErrors = false;

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('Email inválido');
  }

  if (password.length < 6 || password.length > 50) {
    formErrors = true;
    toast.error('Senha inválida');
  }

  if (formErrors) return;

  const callback = (params) => {
    navigate(params);
  };

  dispatch(actions.LoginRequest({ email, password, prevPath, callback }));
};

export default handleSubmit;
