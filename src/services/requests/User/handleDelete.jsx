import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as actions from '../../../store/modules/auth/actions';
import axios from '../../axios';

const handleDelete = async (e, id, setIsLoading, navigate, dispatch) => {
  e.preventDefault();
  try {
    setIsLoading(true);
    const delet = confirm('Deseja realmente excluir sua conta?');

    if (delet) {
      await axios.delete(`/users/${id}`);
      toast.success('Conta excluída com sucesso');
      dispatch(actions.LoginFailure());
      setIsLoading(false);
      navigate('/');
    }
    setIsLoading(false);
    return;
  } catch (err) {
    setIsLoading(false);
    const { errors } = get(err, 'response.data', '');
    toast.error(errors);
  }
};

export default handleDelete;
