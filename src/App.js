import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { Sidebar, Navbar, Spinner } from "components";
import {
  storeAuthUser,
  onStateChanged,
  resetAuthState
} from "store/actions/usersActions";
import "./App.scss";
import Routes from "Routes";
const actions = { storeAuthUser, onStateChanged };

function App(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { onStateChanged, storeAuthUser } = props;
  useEffect(() => {
    const unsubscribeAuth = onStateChanged(authUser => {
      dispatch(resetAuthState()); // reset auth Resolved về false tránh trường hợp đăng nhập
      storeAuthUser(authUser);
    });
    return () => unsubscribeAuth();
  }, []);
  return (
    <Router>
      <ToastProvider>
        {auth.isAuthResolved ? (
          <React.Fragment>
            <Navbar id="navbar-main" auth={auth} />
            <Navbar auth={auth} id="navbar-clone" />
            <Sidebar />
            <Routes />
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </ToastProvider>
    </Router>
  );
}

export default connect(
  null,
  actions
)(App);
