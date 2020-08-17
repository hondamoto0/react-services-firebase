import React, { useState } from "react";
import { RegisterForm } from "components";
import { register } from "store/actions/usersActions";
import { connect } from "react-redux";
import useToast from "helpers/hooks/useToast";
import { Redirect } from "react-router-dom";
const actions = {
  register
};

const Register = props => {
  const [redirect, setRedirect] = useState(false);
  const { showToast } = useToast();
  const { register } = props;
  const registerUser = userData => {
    register(userData).then(
      _ => {
        setRedirect(true);
        showToast("Account successfully created !", "success");
      },
      errorMessage => {
        showToast(errorMessage, "error");
      }
    );
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://placehold.it/128x128" alt="Company Logo" />
            </figure>
            <RegisterForm registerUser={registerUser} />
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(Register);
