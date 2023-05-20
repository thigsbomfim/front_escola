import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../../store/modules/auth/actions';

const handleSubmit = async (
  e,
  email,
  password,
  prevPath,
  setFormErrors,
  formErrors,
  navigate,
  dispatch,
) => {
  e.preventDefault();

  if (!isEmail(email)) {
    setFormErrors(true);
    toast.error('Email inválido');
  }

  if (password.length < 6 || password.length > 50) {
    setFormErrors(true);
    toast.error('Senha inválida');
  }

  const callback = (params) => {
    navigate(params);
  };

  if (formErrors) return;

  dispatch(actions.LoginRequest({ email, password, prevPath, callback }));
};

export default handleSubmit;
