import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "store/actions/usersActions";
import useToast from "helpers/hooks/useToast";
import { useHistory } from "react-router-dom";
const actions = { login };

const LoginForm = props => {
  const history = useHistory();
  const { showToast } = useToast();
  const { login } = props;
  const { register, handleSubmit } = useForm();
  const onLogin = loginData => {
    login(loginData).then(
      _ => {
        showToast("Login Sucessfully ! ", "success");
        history.push("/");
      },
      errorMessage => {
        showToast(`Login Failed : ${errorMessage} `, "error");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <div className="field">
        <div className="control">
          <input
            ref={register}
            name="email"
            className="input is-large"
            type="email"
            placeholder="Your Email"
            autofocus=""
            autocomplete="email"
          />
          {/* <div className="form-error">
            <span className="help is-danger">Email is required</span>
            <span className="help is-danger">Email address is not valid</span>
          </div> */}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={register}
            name="password"
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autocomplete="current-password"
          />
          {/* <div className="form-error">
            <span className="help is-danger">Password is required</span>
          </div> */}
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Sign In
      </button>
    </form>
  );
};

export default connect(
  null,
  actions
)(LoginForm);
