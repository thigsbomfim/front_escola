import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../axios';

const getDataAluno = async (
  id,
  setFoto,
  setNome,
  setSobrenome,
  setEmail,
  setIdade,
  setPeso,
  setAltura,
  setIsLoading,
  navigate,
) => {
  try {
    setIsLoading(true);

    const { data } = await axios.get(`/alunos/${id}`);
    const Foto = get(data, 'Fotos[0].url', '');

    setFoto(Foto);
    setNome(data.nome);
    setSobrenome(data.sobrenome);
    setEmail(data.email);
    setIdade(data.idade);
    setPeso(data.peso);
    setAltura(data.altura);

    setIsLoading(false);
  } catch (err) {
    const status = get(err, 'response.status', 0);
    const errors = get(err, 'response.data.errors', []);

    if (status === 400) errors.map((error) => toast.error(error));
    navigate('/');
  }
};

export default getDataAluno;
