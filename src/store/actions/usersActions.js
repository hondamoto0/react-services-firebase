import * as api from "api/index";
import firebase from "firebase/app";
import "firebase/auth";
import { SET_AUTH_USER, RESET_AUTH_CHANGE } from "common/types";

export const register = registerFormData => dispatch => {
  return api.registerFormData({ ...registerFormData }).then(userProfile => {
    return userProfile;
  });
};

export const login = loginData => dispatch => {
  return api.login(loginData);
};

export const onStateChanged = callback => dispatch => {
  firebase.auth().onAuthStateChanged(callback);
};

export const storeAuthUser = authUser => dispatch => {
  if (authUser) {
    api.getUserProfile(authUser.uid).then(userWithProfile => {
      dispatch({ type: SET_AUTH_USER, payload: { user: userWithProfile } });
    });
  } else {
    dispatch({ type: SET_AUTH_USER, payload: { user: null } });
  }
};

export const logout = () => dispatch => {
  api
    .logout()
    .then(_ => dispatch({ type: SET_AUTH_USER, payload: { user: null } }));
};

export const resetAuthState = () => dispatch => {
  dispatch({ type: RESET_AUTH_CHANGE });
};
