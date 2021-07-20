import React, { useState } from "react";

const SignContext = React.createContext({
  emailSignUp: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  errorOnForm: "",
  setErrorOnForm: () => {},
  userId: "",
  setUserId: () => {},
});

export default SignContext;

export function SignProvider(props) {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [userId, setUserId] = useState(null);
  const [errorOnForm, setErrorOnForm] = useState(null);
  const [password, setPassword] = useState(null);

  const signContext = {
    emailSignUp,
    setEmail: (val) => setEmailSignUp(val),
    userId,
    setUserId: (val) => setUserId(val),
    errorOnForm,
    setErrorOnForm: (val) => setErrorOnForm(val),
    password,
    setPassword: (val) => setPassword(val),
  };
  return (
    <SignContext.Provider value={signContext}>
      {props.children}
    </SignContext.Provider>
  );
}
