import { FETCH_SERVICES_SUCCESS } from "common/types";

const initalState = {
  items: []
};

const servicesReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      const services = action.payload;
      state.items = services;
      return state;
    default:
      return state;
  }
};
export default servicesReducer;
