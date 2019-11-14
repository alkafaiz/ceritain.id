import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TnC, LANDING } from "../constants/routes";
import * as ROLES from "../constants/roles";
import ErrorMessage from "./errormessage";
import { Grow, Switch, FormControlLabel } from "@material-ui/core";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  error: null
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      isAdmin: false,
      error: null,
      checkedAdmin: true
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    console.log(roles);
    const firebase = this.props.firebase;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        //create user in firebase database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email, roles });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    console.log("success", this.props.firebase);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    document.title = "Register - Ceritain.id";
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      checkedAdmin,
      error
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";
    const intrance = true;
    return (
      <Grow
        in={intrance}
        style={{ transformOrigin: "0 0 0" }}
        {...(intrance ? { timeout: 1000 } : {})}
      >
        <section className="container">
          <div className="row">
            <div className="col-md-8 col-lg-5 mx-auto">
              <div className="feature bordered text-center">
                <h4 className="h3 mb24">Register Here</h4>

                <form className="text-left" onSubmit={this.onSubmit}>
                  <input
                    className="mb8"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    placeholder="Username"
                  />
                  <input
                    className="mb8"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                  />
                  <input
                    className="mb8"
                    type="password"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    placeholder="Password"
                  />
                  <input
                    className="mb8"
                    type="password"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    placeholder="Confirm Password"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        value="isAdmin"
                        checked={isAdmin}
                        onChange={this.handleChange("isAdmin")}
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    }
                    label="Admin"
                  />

                  <button
                    className="btn mb8 color-white"
                    type="submit"
                    disabled={isInvalid}
                  >
                    Register
                  </button>
                  {error && <ErrorMessage message={error.message} />}
                </form>

                <p className="mb0">
                  By signing up, you agree to our
                  <Link to={TnC}>&nbsp;Terms of Use</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Grow>
    );
  }
}

export default SignUp;
