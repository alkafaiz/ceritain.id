import React, { Component } from "react";
import logolight from "../img/logo-light.png";
import { Link } from "react-router-dom";
import { LANDING } from "../constants/routes";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="mb-5 pr-3 pl-3 pr-sm-5 pl-sm-5">
        <div className="row">
          <div className="col-sm-5">
            <Link to={LANDING} className="navbar-brand">
              <img
                src={logolight}
                className="responsive logo-footer"
                alt="Ceritain.id | Official logo"
              />
            </Link>
          </div>

          <div className="col-sm-7 footer-contact">
            <ul className="contact-item color-white list-inline pt-2 text-right mb-0 ">
              <li className="list-inline-item">
                <i className="ti ti-headphone-alt"></i>
                <span className="footer-item-text">
                  &nbsp;&nbsp;+6281259333719
                </span>
              </li>
              <li className="list-inline-item">
                <i className="ti ti-email"></i>
                <span className="footer-item-text">
                  &nbsp;&nbsp;ceritain.dev@gmail.com
                </span>
              </li>
              <li className="list-inline-item">
                <i className="ti ti-instagram"></i>
                <span className="footer-item-text">
                  &nbsp;&nbsp;@ceritainid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 pt24">
            <span className="sub color-white fade-half">
              &copy; Copyright 2019 - Ceritain
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
