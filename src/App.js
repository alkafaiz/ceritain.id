import React from "react";
import NavBar from "./components/navbar";
import "./App.css";

import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import About from "./components/about";
import FAQ from "./components/faq";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import NotFound from "./components/notfound";
// import ForgetPw from "./components/forgetpw";
// import ChangePw from "./components/changepw";
import AdminPage from "./components/admin";
import HomePage from "./components/account";
import * as ROUTES from "./constants/routes";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
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
    // const SignUpForm = compose(withRouter, withFirebase)(SignUp);

    const SignInForm = compose(withRouter, withFirebase)(SignIn);

    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.FAQ} component={FAQ} />
            <Route path={ROUTES.SIGN_IN} component={SignInForm} />
            {/* <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
            <Route path={ROUTES.PASSWORD_FORGET} component={ForgetPw} />
            <Route path={ROUTES.PASSWORD_CHANGE} component={ChangePw} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
