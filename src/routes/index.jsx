import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import Private from './Private';
import { Navigate } from 'react-router-dom';

function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private isClosed>
            <Alunos />
          </Private>
        }
      />
      <Route
        path="/aluno/:id/edit"
        element={
          <Private isClosed>
            <Aluno />
          </Private>
        }
      />
      <Route
        path="/aluno/"
        element={
          <Private isClosed>
            <Aluno />
          </Private>
        }
      />
      <Route
        path="/fotos/:id"
        element={
          <Private isClosed>
            <Fotos />
          </Private>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to={`/`} /> : <Login />}
      />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
