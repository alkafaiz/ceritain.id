import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import * as ROLES from "../constants/roles";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  componentDidMount() {
    document.title = "Sign In - Ceritain.id";
  }
  resetstate = () => {
    this.setState({
      email: "",
      password: "",
      error: null
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const firebase = this.props.firebase;
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        console.log({ authUser });
        authUser.roles[ROLES.ADMIN]
          ? this.props.history.push(ROUTES.ADMIN)
          : this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    console.log("success");
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === "" || password === "";
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-8 col-lg-5 mx-auto">
            <div className="feature bordered text-center">
              <h5 className="h3 mb24 ">Login Here</h5>
              <form className="text-left" onSubmit={this.onSubmit}>
                <input
                  className="mb8"
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  placeholder="Email"
                />
                <input
                  className="mb8"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  placeholder="Password"
                />
                <input
                  disabled={isInvalid}
                  className="btn"
                  type="submit"
                  value="Login"
                />
                {error && <p>{error.message}</p>}
              </form>

              <Link className="mb8" to={ROUTES.PASSWORD_FORGET}>
                Lupa password?
              </Link>
              <p className="mb0">
                Baru di Ceritain?&nbsp;
                <Link to={ROUTES.SIGN_UP}>Daftar disini</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignIn;
