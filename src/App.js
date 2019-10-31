import React from "react";
import NavBar from "./components/navbar";
import "./App.css";

import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import FAQ from "./components/faq";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import ForgetPw from "./components/forgotpw";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { FirebaseContext, withFirebase } from "./components/firebase";
import { compose } from "recompose";
import { withAuthentication } from "./components/session";

class App extends React.Component {
  signupForm = () => {
    return (
      <FirebaseContext.Consumer>
        {firebase => <SignUp firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  };

  render() {
    const SignUpForm = compose(
      withRouter,
      withFirebase
    )(SignUp);

    const SignInForm = compose(
      withRouter,
      withFirebase
    )(SignIn);

    return (
      <React.Fragment>
        <Router>
          <NavBar />

          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.FAQ} component={FAQ} />
          <Route path={ROUTES.SIGN_IN} component={SignInForm} />
          <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
          <Route path={ROUTES.PASSWORD_FORGET} component={ForgetPw} />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
