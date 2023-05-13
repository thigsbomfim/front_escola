import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // nome para a Aplicação
      key: 'REACT-BASE-TEST',
      // local onde ira ser salvo o redux da aplicação
      storage,
      // salva o module criado no rootReducer
      whitelist: ['example'],
    },
    reducers,
  );
  // retorna a função persistReducer
  return persistedReducers;
};
