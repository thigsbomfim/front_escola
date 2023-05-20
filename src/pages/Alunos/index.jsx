import { get } from 'lodash';
import { useEffect, useState } from 'react';
import {
  FaEdit,
  FaExclamation,
  FaUserCircle,
  FaWindowClose,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import handleDel from '../../services/requests/Alunos/handleDelete';
import getData from '../../services/requests/Alunos/handleDeleteAsk';
import { Container } from '../../styles/GlobalStyle';
import {
  AlunoContainer,
  ContainerButtons,
  NovoAluno,
  ProfilePicture,
} from './styled';

function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(setIsLoading, setAlunos);
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = (e, id, index) => {
    return handleDel(e, id, index, setAlunos, alunos, setIsLoading);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to={'/aluno'}>Novo aluno</NovoAluno>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="Foto" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <ContainerButtons>
              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>
              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                cursor="pointer"
                display="none"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </ContainerButtons>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}

export default Alunos;
