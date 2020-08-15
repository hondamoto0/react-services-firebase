import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar, Navbar } from "components";
import {
  HomePage,
  ProfilePage,
  FAQPage,
  ServicesPage,
  LoginPage,
  RegisterPage,
  ServiceDetail
} from "pages";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route exact path="/services">
            <ServicesPage />
          </Route>
          <Route path="/services/:serviceId">
            <ServiceDetail />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
