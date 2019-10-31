import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../firebase";

const INITIAL_STATE = {
  email: "",
  error: null
};

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { username, email } = this.state;
    const firebase = this.props.firebase;
    firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    console.log("success reset password", this.props.firebase);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    document.title = "Lupa Password - Ceritain.id";
  }
  render() {
    const { error, email } = this.state;
    const isInvalid = email === "";
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-8 col-lg-5 mx-auto">
            <h3 className="h3">Kembalikan akun kamu</h3>
            <p className="lead">Silahkan masukan email akun kamu disini.</p>
            <h5 className="h5 gray mb8 ">Email</h5>
            <form className="" onSubmit={this.onSubmit}>
              <input
                className="mb8"
                type="text"
                name="email"
                value={email}
                onChange={this.onChange}
                placeholder="Enter your email"
              />
              <button className="btn white" type="submit" disabled={isInvalid}>
                Send
              </button>
              {error && (
                <div
                  className="alert alert-danger alert-dismissible"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>No Good!</strong> {error.message}
                </div>
              )}
            </form>

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

export default withFirebase(ForgotPw);
