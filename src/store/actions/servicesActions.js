import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE
} from "common/types";

import * as api from "api";
export const fetchServices = () => dispatch => {
  // let services = [];
  api.fetchServices().then(services => {
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: services
    });
  });
};

export const requestService = () => ({
  type: REQUEST_SERVICE
});

export const resetPreviousService = () => {
  return {
    type: FETCH_SERVICE_SUCCESS,
    payload: {}
  };
};

export const fetchServiceById = serviceId => (dispatch, getState) => {
  const lastService = getState().selectedService.item;
  if (lastService.id !== serviceId) {
    console.log("ere");
    dispatch({ type: REQUEST_SERVICE });
    api.fetchServiceById(serviceId).then(snapshot =>
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: snapshot
      })
    );
  }
  return;
};
