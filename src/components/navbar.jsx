import React from "react";
import logodark from "./logo-dark.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import SignOutButton from "./signout";
import { AuthUserContext } from "./session";

//stateless functional component

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="mt-2 bg-transparent pr-3 pl-3 pr-sm-5 pl-sm-5 navbar navbar-expand-lg navbar-light">
        <Link to={ROUTES.LANDING} className="navbar-brand">
          <img
            src={logodark}
            className="responsive logo-nav"
            alt="Ceritain.id | Official logo"
          />
        </Link>

        <button
          className="navbar-toggler m-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mt-2 mt-lg-0 menu-item-list">
            <li className="nav-item">
              <NavLink to={ROUTES.LANDING} exact className="nav-link ml-3">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={ROUTES.ABOUT} className="nav-link ml-3">
                Tentang Ceritain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={ROUTES.FAQ} className="nav-link ml-3">
                FAQ
              </NavLink>
            </li>

            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link
                        className="btn ml-3 btn-filled btn-rounded nav-item"
                        to={ROUTES.HOME}
                      >
                        Home Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="btn ml-3 btn-filled btn-rounded nav-item"
                        to={ROUTES.ACCOUNT}
                      >
                        Account
                      </Link>
                    </li>
                    <li className="nav-item">
                      <SignOutButton />
                    </li>
                  </React.Fragment>
                ) : (
                  <li className="nav-item">
                    <a
                      className="btn ml-3 btn-filled btn-rounded nav-item inner-link"
                      href="#subscribe"
                    >
                      Mulai Ceritain
                    </a>
                    {/* <Link
                      className="btn ml-3 btn-filled btn-rounded nav-item"
                      to={ROUTES.SIGN_IN}
                    >
                      Mulai Ceritain
                    </Link> */}
                  </li>
                )
              }
            </AuthUserContext.Consumer>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
