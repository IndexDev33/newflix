import React, { useState } from "react";

const SignContext = React.createContext({
  emailSignUp: "",
  setEmail: () => {},
  logIn: "",
  toggleLogIn: () => {},
  userId: "",
  setUserId: () => {},
});

export default SignContext;

export function SignProvider(props) {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [logIn, setLogIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const signContext = {
    emailSignUp,
    setEmail: (val) => setEmailSignUp(val),
    logIn,
    toggleLogIn: (val) => setLogIn(val),
    userId,
    setUserId: (val) => setUserId(val),
  };
  return (
    <SignContext.Provider value={signContext}>
      {props.children}
    </SignContext.Provider>
  );
}
