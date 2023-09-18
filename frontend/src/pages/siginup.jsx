import React from "react";
import { Link } from "react-router-dom";
import signupImg from '../assets/images/register.png'
export default function siginup() {
  return (
    <section className="row">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
                src={signupImg}
              className="img-fluid"
              alt="signupImage"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form>
              <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="full name">
                  full name
                </label>
                <input
                  type="text"
                  id="full name"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  name="full name"
                />
              </div>
              <div className="form-outline mb-4">
            <label className="form-label" htmlFor="phone">
                  phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter a phone number"
                  name="phone"
                />
              </div>
              <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email"
                  name="email"
                />
              </div>
              <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg "
                  placeholder="Enter password"
                  name="password"
                />
              </div>
              <div className="text-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn bgBtn btn-block mb-4 fs-5"
                >
                  create account
                </button>
                <p className="small fw-bold mb-3 fs-6">
                  have an account?{" "}
                  <Link to="/signin" className="mainColor">
                    login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
