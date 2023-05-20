import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as actions from '../../../store/modules/auth/actions';
import axios from '../../axios';

const handleChange = async (
  e,
  id,
  setFoto,
  setIsLoading,
  navigate,
  dispatch,
) => {
  const foto = e.target.files[0];
  const fotoURL = URL.createObjectURL(foto);

  setFoto(fotoURL);

  const formData = new FormData();
  formData.append('aluno_id', id);
  formData.append('foto', foto);

  try {
    setIsLoading(true);

    await axios.post('/fotos/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    toast.success('Foto enviada com sucesso');

    setIsLoading(false);
    navigate('/');
  } catch (err) {
    setIsLoading(false);
    const { status } = get(err, 'response', '');
    toast.error('Erro ao enviar foto');

    if (status === 401) dispatch(actions.LoginFailure());
  }
};

export default handleChange;
