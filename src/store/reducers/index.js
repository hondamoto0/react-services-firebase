import { combineReducers } from "redux-immer";
import produce from "immer";
import servicesReducer from "store/reducers/servicesReducer";
import selectedServiceReducer from "store/reducers/selectedServiceReducer";
import authReducer from "store/reducers/authReducer";
const rootReducer = combineReducers(produce, {
  services: servicesReducer,
  selectedService: selectedServiceReducer,
  auth: authReducer
});

export default rootReducer;
