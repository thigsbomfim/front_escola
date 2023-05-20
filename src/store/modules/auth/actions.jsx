import * as types from '../types';

// Login
export function LoginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function LoginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function LoginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

// Register e Update
export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS,
    payload,
  };
}
export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
