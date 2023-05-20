// Passa todas as configurações do reducer para esse modulo
import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
  auth,
});
