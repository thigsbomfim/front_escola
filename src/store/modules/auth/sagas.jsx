import { get } from 'lodash';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';

// Login do usuário
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.LoginSuccess({ ...response.data }));

    toast.success('Que bom que você veio =)');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    return payload.callback(payload.prevPath)
      ? payload.callback(payload.prevPath)
      : null;
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.LoginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// Cadastro de usuário
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  try {
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });

      toast.success('Conta alterada com sucesso');

      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });

      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSuccess());

      if (payload.callback) return payload.callback('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.LoginFailure());
      return payload.callback ? payload.callback('/login') : null;
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
