import React from "react";

import "./sign-in-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => {
  return (
    <div>
      <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default SignInSignUpPage;
