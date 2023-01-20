import React from "react";
import { Heading } from "../../components/heading/Heading";

export const SignUp = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <Heading name={"Create Your Profile"} />
          <form action="/singup/user" method="POST">
            <label htmlFor="username" className="form-label">
              Enter Username
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              required
            />

            <label htmlFor="email" className="form-label">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
            />

            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              required
            />
            <button type="submit" className="btn btn-primary mt-3">
              Create Accout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
