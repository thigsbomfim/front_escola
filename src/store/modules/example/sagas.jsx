// redux-saga -> serve para ficar ouvindo a requisição da API
// all -> permite colocar mais de uma action para escutar/observar
// takeLatest -> pega a ultima vez que o usuario fez a ação.
// supondo que seja um clique no botao, irá pegar apenas o
// ultimo clique.
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';

const requisicao = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

// funções geradoras
function* exampleRequest() {
  try {
    // pega a action
    // call seria mais ou menos um async/await do axios
    yield call(requisicao);
    // put dispara a action
    // se der sucesso, vai chamar a action success
    yield put(actions.clicaBotaoSuccess());
  } catch (error) {
    toast.error('Deu erro');
    // se der erro vai chamar a action de failure
    yield put(actions.clicaBotaoFailure());
  }
}

// exporta tudo da função exampleRequest pegando apenas a ultima action feita(takeLatest)
// passa como 1° argumento os types das actions e o 2° a requisição feita
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
