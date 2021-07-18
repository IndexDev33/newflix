import React from "react";
import Sign from "../../components/Sign/SignCard";
import Footer from "../../components/Cards/Footer";

export default function SignUp() {
  return (
    <React.Fragment>
      <Sign
        signUpCard={true}
        title="Create a password to start your membership"
      />
      <Footer />
    </React.Fragment>
  );
}
