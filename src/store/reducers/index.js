import { combineReducers } from "redux-immer";
import produce from "immer";
import servicesReducer from "store/reducers/servicesReducer";
import selectedServiceReducer from "store/reducers/selectedServiceReducer";

const rootReducer = combineReducers(produce, {
  services: servicesReducer,
  selectedService: selectedServiceReducer
});

export default rootReducer;
