import { get } from 'lodash';
import axios from '../../axios';
import { toast } from 'react-toastify';

const getData = async (id, setFoto, setIsLoading, navigate) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get(`/alunos/${id}`);
    setFoto(get(data, 'Fotos[0].url', ''));
    setIsLoading(false);
  } catch (err) {
    toast.error('Erro ao obter imagem');
    setIsLoading(false);
    navigate('/');
  }
};

export default getData;
