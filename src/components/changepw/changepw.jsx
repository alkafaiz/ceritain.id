import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class ChangePw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { passwordOne } = this.state;
    const firebase = this.props.firebase;
    firebase
      .doPasswordUpdate(passwordOne)
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
    document.title = "Change My Password - Ceritain.id";
  }
  render() {
    const { error, passwordOne, passwordTwo } = this.state;
    const isInvalid = passwordOne === "" || passwordOne !== passwordTwo;
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-8 col-lg-5 mx-auto">
            <h3 className="h3 mb-4">Silahkan masukan password baru</h3>
            <h5 className="h5 gray mb8 ">New Password</h5>
            <form className="" onSubmit={this.onSubmit}>
              <input
                className="mb8"
                type="password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                placeholder="Enter your new password"
              />
              <input
                className="mb8"
                type="password"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                placeholder="Confirm your new password"
              />
              <button className="btn white" type="submit" disabled={isInvalid}>
                Reset My Password
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
          </div>
        </div>
      </section>
    );
  }
}

export default withFirebase(ChangePw);
