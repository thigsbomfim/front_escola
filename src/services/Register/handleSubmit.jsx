import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import * as actions from '../../store/modules/auth/actions';

const handleSubmit = async (
  e,
  id,
  nome,
  email,
  password,
  setFormErrors,
  formErrors,
  navigate,
  dispatch,
) => {
  e.preventDefault();
  if (nome.length < 3 || nome.length > 255) {
    setFormErrors(true);
    toast.error('Nome deve ter entre 3 e 255 caracteres');
  }
  if (!isEmail(email)) {
    setFormErrors(true);
    toast.error('Email inválido');
  }
  if (!id && (password.length < 6 || password.length > 50)) {
    setFormErrors(true);
    toast.error('Senha deve ter entre 6 e 50 caracteres');
  }

  if (formErrors) return;

  const callback = (params) => {
    return navigate(params);
  };

  dispatch(actions.registerRequest({ nome, email, password, id, callback }));
};

export default handleSubmit;
