import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';
import { Container } from '../../styles/GlobalStyle';
import { Paragrafo, Title } from './styled';

function Login() {
  // redux
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    // busca a action do redux ao clicar no botão
    dispatch(exampleActions.clicaBotaoRequest());
  };

  return (
    <Container>
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>

      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

export default Login;
