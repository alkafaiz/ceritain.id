import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TnC, LANDING } from "../constants/routes";
import ErrorMessage from "./errormessage";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    };
  }
  resetstate = () => {
    this.setState({
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;
    const firebase = this.props.firebase;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        //create user in firebase database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email });
      })
      .then(authUser => {
        /***this.resetstate();*/
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
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";
    return (
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
    );
  }
}

export default SignUp;
