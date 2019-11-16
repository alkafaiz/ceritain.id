import React from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../firebase";

const SignOutButton = ({ firebase }) => {
  return (
    <button
      className="btn ml-3 btn-filled btn-rounded nav-item"
      onClick={firebase.doSignOut}
    >
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
