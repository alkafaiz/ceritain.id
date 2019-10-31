import React from "react";
import ForgetPw from "../forgetpw";
import ChangePw from "../changepw";

import { AuthUserContext, withAuthorization } from "../session";

const AccountPage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account Page: {authUser.email}</h1>
          <ForgetPw />
          <ChangePw />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
