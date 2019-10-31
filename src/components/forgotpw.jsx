import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

class ForgotPw extends Component {
  componentDidMount() {
    document.title = "Lupa Password - Ceritain.id";
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-8 col-lg-5 mx-auto">
            <h3 className="h3">Kembalikan akun kamu</h3>
            <p className="lead">Silahkan masukan email akun kamu disini.</p>
            <h5 className="h5 gray mb8 ">Email</h5>
            <form className="">
              <input
                className="mb8"
                type="text"
                placeholder="Enter your email"
              />
            </form>
            <Link className="btn " to={ROUTES.LANDING}>
              Cancel
            </Link>
            <button className="btn ml-2 btn-primary white">Send</button>

            <p className="mb0">
              Baru di Ceritain?&nbsp;
              <Link to={ROUTES.SIGN_UP}>Daftar disini</Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPw;
