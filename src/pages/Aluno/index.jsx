import { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import getData from '../../services/requests/Aluno/getData';
import handle from '../../services/requests/Aluno/handleSubmit';
import { Container } from '../../styles/GlobalStyle';
import { Form, ProfilePicture, Title } from './styled';

function Aluno() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    getData(
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
    );
  }, []);

  const handleSubmit = (e) => {
    handle(
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
    );
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar aluno' : 'Novo aluno'}</Title>

      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
      </Form>
    </Container>
  );
}

export default Aluno;
