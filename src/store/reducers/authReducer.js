import { SET_AUTH_USER, RESET_AUTH_CHANGE } from "common/types";

const initialState = {
  user: null,
  isAuth: false,
  isAuthResolved: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      const { user } = action.payload;
      state.user = user;
      state.isAuth = !!state.user;
      state.isAuthResolved = true;
      return state;
    case RESET_AUTH_CHANGE:
      state.isAuthResolved = false;
      return state;
    default:
      return state;
  }
};

export default authReducer;
