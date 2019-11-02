import React, { Component } from "react";
import { withFirebase } from "./firebase";
import SimpleReactValidator from "simple-react-validator";
import ErrorMessage from "./errormessage";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      element: message => (
        <div className="row">
          <div className="col-sm-7 mb-sm-3 mx-auto text-center">
            <span>{message}</span>
          </div>
        </div>
      )
    });
    this.state = {
      email: "",
      error: ""
    };
  }

  resetError = () => {
    this.setState({ error: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    if (this.validator.allValid()) {
      const { email } = this.state;
      const firebase = this.props.firebase;
      firebase
        .email_pUserRef()
        .push()
        .set({ email })
        // .email_pUser(email)
        // .set({ email })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.setState({ error: this.validator.getErrorMessages().email });

      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      //this.forceUpdate();
    }
  };

  handleEmail = event => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  };
  render() {
    const { error } = this.state;
    return (
      <React.Fragment>
        <div className="row mb-sm-3 mt-sm-5 mb-2">
          <div className="col-sm-9 mb-3 mx-auto text-center">
            <h4 className="h4 color-primary">Tertarik untuk bercerita?</h4>
            <form
              className="form-newsletter halves"
              onSubmit={this.handleSubmit}
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
          </div>
        </div>
        {this.validator.message(
          "email",
          this.state.email,
          "required|email",
          this.validator.element
        )}
        {/* <div className="srv-validation-message">
          {this.validator.getErrorMessages}
        </div> */}
        {/* {this.validator.getErrorMessages && (
          <div className="row">
            <div className="col-sm-7 mb-sm-3 mx-auto text-center">
              <ErrorMessage message={error} />
            </div>
          </div>
        )} */}
      </React.Fragment>
    );
  }
}

export default withFirebase(Subscribe);
