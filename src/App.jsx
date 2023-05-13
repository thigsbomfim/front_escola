import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  // // mensagens
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   toast.success('Oie, sucesso!');
  //   toast.error('Oie, error!');
  // }, []);
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
