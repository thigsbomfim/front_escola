// controla todas as sagas feitas no arquivo sagas do example

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
