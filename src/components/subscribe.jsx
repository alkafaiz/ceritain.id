import React, { Component } from "react";
import { FirebaseContext } from "./firebase";

class Subscribe extends Component {
  state = {
    email: "",
    error: false,
    registeredEmail: [
      { email: "admin@gmial.com" },
      { email: "test@yahoo.com" },
      { email: "ab@gmail.com" }
    ]
  };

  componentWillMount() {}
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
  };

  handleEmail = event => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <div className="row mb-sm-5 mt-sm-5 mb-5">
        <div className="col-sm-9 mb-sm-5 mx-auto text-center">
          <h4 className="h4 color-primary">Tertarik untuk bercerita?</h4>
          <form
            className="form-newsletter halves"
            onSubmit={this.handleSubmit}
            data-success="Thanks for your registration, we will be in touch shortly."
            data-error="Please fill all fields correctly."
          >
            <input
              type="text"
              name="email"
              onChange={this.handleEmail}
              className="mb0 validate-email validate-required  signup-email-field"
              placeholder="Tulis alamat email"
            />
            <button type="submit" className="mb0 btn">
              Kabari aku!
            </button>
          </form>
          <FirebaseContext.Consumer>
            {firebase => {
              return <div>I've access to Firebase and render something.</div>;
            }}
          </FirebaseContext.Consumer>
          {this.state.registeredEmail.map(m => (
            <h1 key={m.email}>{m.email}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Subscribe;
