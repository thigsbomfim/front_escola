import axios from '../../../services/axios';
import * as types from '../types';

// estado inicial do state
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// cria todos os reducer
export default function (state = initialState, action) {
  switch (action.type) {
    // Login
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    // Register e Update
    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
