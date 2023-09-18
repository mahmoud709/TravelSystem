import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
export default function Login() {
  return (
    <section className="row">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={loginImg}
              className="img-fluid"
              alt="signupImage"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
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
                  Login
                </button>
                <p className="small fw-bold mb-3 fs-6">
                  Don't have an account?{" "}
                  <Link to="/signup" className="mainColor">
                    register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
