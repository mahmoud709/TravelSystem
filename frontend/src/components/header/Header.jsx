import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width={180} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/tours">
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {/* <!-- Login & Register --> */}
          <div className="nav_right ">
            <div className="btns ">
              <Link to="/signin">
              <button className="btn secondary__btn">
                Login
              </button>
              </Link>
              <Link to="/signup" className="text-white">
                <button className="btn primary__btn text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
