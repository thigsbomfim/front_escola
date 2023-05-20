import { get } from 'lodash';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import isFloat from 'validator/lib/isFloat';
import isInt from 'validator/lib/isInt';
import * as actions from '../../../store/modules/auth/actions';
import axios from '../../axios';

const handleSubmitAluno = async (
  e,
  id,
  nome,
  sobrenome,
  email,
  idade,
  peso,
  altura,
  setIsLoading,
  navigate,
  dispatch,
) => {
  e.preventDefault();

  let formErrors = false;

  if (nome.length < 3 || nome.length > 255) {
    toast.error('Nome precisar ter entre 3 e 255 caracteres');
    formErrors = true;
  }
  if (sobrenome.length < 3 || sobrenome.length > 255) {
    toast.error('Sobrenome precisar ter entre 3 e 255 caracteres');
    formErrors = true;
  }
  if (!isEmail(email)) {
    toast.error('Email inválido');
    formErrors = true;
  }
  if (!isInt(String(idade))) {
    toast.error('Idade inválida');
    formErrors = true;
  }
  if (!isFloat(String(peso))) {
    toast.error('Peso inválido');
    formErrors = true;
  }
  if (!isFloat(String(altura))) {
    toast.error('Altura inválida');
    formErrors = true;
  }

  if (formErrors) return;

  try {
    setIsLoading(true);
    if (id) {
      await axios.put(`/alunos/${id}`, {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      toast.success('Aluno editado com sucesso');
      navigate('/');
    } else {
      await axios.post(`/alunos`, {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      toast.success('Aluno criado com sucesso');
      // navigate(`/aluno/${data.id}/edit`);
      navigate('/');
    }
    setIsLoading(false);
  } catch (err) {
    const status = get(err, 'response.status', 0);
    const data = get(err, 'response.data', {});
    const errors = get(data, 'errors', []);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }
    if (status === 401) dispatch(actions.LoginFailure());
    setIsLoading(false);
  }
};

export default handleSubmitAluno;
