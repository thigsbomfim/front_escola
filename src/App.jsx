import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store, { persistor } from './store';
import Header from './components/Header';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

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
      <Router>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            <AppRoutes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className="toast-container" />
          </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
