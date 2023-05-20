import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import getData from '../../services/requests/Fotos/getData';
import handle from '../../services/requests/Fotos/handleChange';
import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';

function Fotos() {
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getData(id, setFoto, setIsLoading, navigate);
  }, []);

  const handleChange = async (e) => {
    handle(e, id, setFoto, setIsLoading, navigate, dispatch);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

export default Fotos;
