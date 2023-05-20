import axios from '../../axios';
import { toast } from 'react-toastify';
import { get } from 'lodash';

const handleDelete = async (e, id, index, setAlunos, alunos, setIsLoading) => {
  e.persist();
  try {
    setIsLoading(true);
    await axios.delete(`/alunos/${id}`);

    const novosAlunos = [...alunos];
    novosAlunos.splice(index, 1);
    setAlunos(novosAlunos);
    setIsLoading(false);
  } catch (err) {
    const status = get(err, 'response.status', 0);

    if (status === 401) return toast.error('Você precisa fazer login');
    else toast.error('Ocorreu um erro ao excluir o aluno');
    setIsLoading(false);
  }
};

export default handleDelete;
