import db from "firebase/config";
import firebase from "firebase/app";
import "firebase/auth";

// -------- SERVICES ---------
export const fetchServiceById = serviceId => {
  const collectionRef = db.collection("services");
  return collectionRef
    .doc(serviceId)
    .get()
    .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }));
};

export const fetchServices = () => {
  const collectionRef = db.collection("services");
  return collectionRef.get().then(snapshot => {
    const services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return services;
  });
};

// -------- SERVICES END ---------

// -------- AUTH ---------

const createUserProfile = userProfile => {
  db.collection("profile")
    .doc(userProfile.uid)
    .set(userProfile);
};

export const registerFormData = async ({
  email,
  password,
  fullName,
  avatar
}) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = response;
    const userProfile = {
      uid: user.uid, // lấy id từ firebase
      fullName,
      email,
      avatar,
      services: [],
      description: ""
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async ({ email, password }) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return response;
};

export const getUserProfile = uid => {
  return db
    .collection("profile")
    .doc(uid)
    .get()
    .then(snapshot => ({ uid, ...snapshot.data() }));
};

export const logout = () => {
  return firebase.auth().signOut();
};
