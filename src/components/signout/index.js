import React from "react";

import { withFirebase } from "../firebase";

const SignOutButton = ({ firebase }) => {
  return (
    <button type="button" className="btn" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
