import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from "common/types";
import db from "firebase/config";

export const fetchServices = () => dispatch => {
  // let services = [];
  const collectionRef = db.collection("services");
  collectionRef.get().then(snapshot => {
    const services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: services
    });
  });
};

export const fetchServiceById = serviceId => dispatch => {
  db.collection("services")
    .doc(serviceId)
    .get()
    .then(snapshot => {
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: snapshot.data()
      });
    });
};
