import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  ProfilePage,
  FAQPage,
  ServicesPage,
  LoginPage,
  RegisterPage,
  ServiceDetail
} from "pages";
const Routes = () => {
  return (
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
  );
};

export default Routes;
