import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Private from './Private';

const isLoggedIn = false;

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: isLoggedIn ? (
          <Private redirectTo="/login">
            <Dashboard />
          </Private>
        ) : (
          <Home />
        ),
        exact: true,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
