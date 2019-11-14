import React, { Component } from "react";
import { withFirebase } from "../firebase";
import SimpleReactValidator from "simple-react-validator";

const LabelForm = () => {
  return (
    <h4 className="h4 color-primary mb-3 mb-sm-4">Tertarik untuk bercerita?</h4>
  );
};

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      element: message => (
        <div className="row pt-3">
          <div
            className="alert alert-danger alert-dismissible mx-auto"
            role="alert"
          >
            <h5 className="h5">{message}</h5>
          </div>
        </div>
      )
    });
    this.state = {
      email: "",
      error: "",
      isSubmitted: false
    };
  }

  getTime = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  };

  resetError = () => {
    this.setState({ error: "" });
  };

  submitted = () => {
    this.setState({ isSubmitted: true });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.validator.allValid()) {
      const { email } = this.state;
      const firebase = this.props.firebase;
      firebase
        .email_pUserRef()
        .push()
        .set({ email, date: this.getTime() })
        // .email_pUser(email)
        // .set({ email })
        .catch(error => {
          this.setState({ error });
        });
      this.submitted();
    } else {
      this.setState({ error: this.validator.getErrorMessages().email });

      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleEmail = event => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  };

  render() {
    const { isSubmitted } = this.state;
    const { addClass, displayLabel } = this.props;
    return (
      <React.Fragment>
        {isSubmitted === false ? (
          <React.Fragment>
            {displayLabel === true ? <LabelForm /> : null}

            <form
              className={`form-newsletter ${addClass}`}
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                name="email"
                onChange={this.handleEmail}
                className="mb0"
                placeholder="Tulis alamat email"
              />

              <button type="submit" className="mb0 btn">
                Kabari aku!
              </button>
            </form>
          </React.Fragment>
        ) : (
          <div className="alert alert-success alert-dismissible" role="alert">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="h4">
              <i className="ti ti-check"></i>
              &nbsp;Terima kasih, tunggu kabar dari kita yaa
            </h4>
          </div>
        )}

        {this.validator.message(
          "email",
          this.state.email,
          "required|email",
          this.validator.element
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(Subscribe);
