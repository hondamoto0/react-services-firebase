import React from "react";
import { useForm } from "react-hook-form";
import { isValidImage, isValidUrl, sameAs } from "helpers/validator";
const RegisterForm = props => {
  const { registerUser } = props;
  const { register, handleSubmit, errors, getValues } = useForm();
  const getFormData = data => {
    registerUser(data);
  };
  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="field">
        <div className="control">
          <input
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
            name="email"
            className="input is-large"
            type="email"
            placeholder="Your Email"
            autoFocus=""
            autoComplete="email"
          />
          {errors.email && (
            <span className="form-error">
              {errors.email.type == "required" && (
                <span className="help is-danger">Email is required</span>
              )}
              {errors.email.type == "partern" && (
                <span className="help is-danger">
                  Email address is not valid
                </span>
              )}
            </span>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={register({ required: true, minLength: 10 })}
            name="fullName"
            className="input is-large"
            type="text"
            placeholder="Full Name"
            autoFocus=""
          />
          {errors.fullName && (
            <div className="form-error">
              {errors.fullName.type == "required" && (
                <span className="help is-danger">Name is required</span>
              )}
              {errors.fullName.type == "minLength" && (
                <span className="help is-danger">Minlength 10</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={register({
              required: true,
              validate: { isValidUrl, isValidImage }
              // pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
            })}
            name="avatar"
            className="input is-large"
            type="text"
            placeholder="Avatar"
            autoFocus=""
          />
          {errors.avatar && (
            <div className="form-error">
              {errors.avatar.type === "required" && (
                <span className="help is-danger">Avatar is required</span>
              )}
              {errors.avatar.type === "isValidImage" && (
                <span className="help is-danger">Avatar is not valid</span>
              )}
              {errors.avatar.type === "isValidUrl" && (
                <span className="help is-danger">Avatar url is not valid</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={register({
              required: true,
              minLength: 6
            })}
            name="password"
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
          />
          {errors.password && (
            <div className="form-error">
              {errors.password.type == "required" && (
                <span className="help is-danger">Password is required</span>
              )}
              {errors.password.type == "minLength" && (
                <span className="help is-danger">Minimum length is 6</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={register({
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs(getValues, "password") }
            })}
            name="passwordConfirmation"
            className="input is-large"
            type="password"
            placeholder="Repeat Password"
            autoComplete="current-password"
          />
          {errors.passwordConfirmation && (
            <div className="form-error">
              {errors.passwordConfirmation.type === "required" && (
                <span className="help is-danger">
                  Password Confirmation is required
                </span>
              )}
              {errors.passwordConfirmation.type === "minLength" && (
                <span className="help is-danger">
                  Password length is 6 characters
                </span>
              )}
              {errors.passwordConfirmation.type === "sameAs" && (
                <span className="help is-danger">
                  Password confirm not the same
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
