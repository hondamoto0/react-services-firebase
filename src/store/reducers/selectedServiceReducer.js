import { FETCH_SERVICE_SUCCESS, REQUEST_SERVICE } from "common/types";

const initialState = {
  item: {},
  isFetching: false
};

const selectedServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_SUCCESS:
      const service = action.payload;
      state.item = service;
      state.isFetching = false;
      return state;
    case REQUEST_SERVICE:
      state.item = {};
      state.isFetching = true;
      return state;
    default:
      return state;
  }
};
export default selectedServiceReducer;
