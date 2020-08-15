import { FETCH_SERVICE_SUCCESS } from "common/types";

const initialState = {
  item: {}
};

const selectedServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_SUCCESS:
      const service = action.payload;
      state.item = service;
      return state;
    default:
      return state;
  }
};
export default selectedServiceReducer;
