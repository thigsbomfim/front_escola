import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import * as actions from '../../../store/modules/auth/actions';

const handleSubmit = async ({
  id,
  nome,
  email,
  password,
  navigate,
  dispatch,
}) => {
  let hasErrors = false;

  if (nome.length < 3 || nome.length > 255) {
    hasErrors = true;
    toast.error('Nome deve ter entre 3 e 255 caracteres');
  }
  if (!isEmail(email)) {
    hasErrors = true;
    toast.error('Email inválido');
  }
  if (!id && (password.length < 6 || password.length > 50)) {
    hasErrors = true;
    toast.error('Senha deve ter entre 6 e 50 caracteres');
  }

  if (hasErrors) return;

  const callback = (params) => {
    return navigate(params);
  };

  dispatch(actions.registerRequest({ nome, email, password, id, callback }));
};

export default handleSubmit;
