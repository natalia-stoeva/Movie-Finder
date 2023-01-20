import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../components/heading/Heading";

export const Login = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <Heading name={"Login"} />
          <form action="/login/user" method="POST">
            <label className="form-label" id="username">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              htmlFor="username"
              autoComplete="off"
            />

            <label htmlFor="password" className="form-label">
              Password{" "}
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </form>

          <div>
            <p className="info-text mt-2 fst-italic">Don't have an account?</p>
            <Link to="/signup"> Signup here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
