import React, { useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";

import SignContext from "../../store/signing-context";
import RememberMe from "./RememberMe";
import InputField from "./InputField";
import HybridInfo from "./HybridInfo";

import Link from "next/link";
import {
  Form,
  TitleForm,
  SignError,
  Btn,
  Wrapper,
  Container,
} from "../styles/sign";

export default function SignInCard() {
  const [signError, setSignError] = useState(null);
  const [remember, setRemember] = useState(false);
  const { emailSignUp, setUserId, errorOnForm, password } =
    useContext(SignContext);
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!errorOnForm) {
      auth
        .signInWithEmailAndPassword(emailSignUp, password)
        .then((user) => {
          setSignError(null);
          router.push("/profiles");
          setUserId(user.user.uid);
          // remember && localStorage.setItem("userId", user.user.uid);
          // remember && localStorage.setItem("email", emailRef.current.value);
          // remember &&
          //   localStorage.setItem("password", passwordRef.current.value);
        })
        .catch((err) => {
          setSignError(err.code);
        });
    }
  };

  return (
    <Wrapper bgWide={true}>
      <Container color="#fff">
        <TitleForm>Sign In</TitleForm>
        <Form>
          {signError === "auth/wrong-password" && (
            <SignError>
              Incorrect password. Please try again or you can
              <Link href="#"> reset your password.</Link>
            </SignError>
          )}
          {signError === "auth/user-not-found" && (
            <SignError>
              Sorry, we can't find an account with this email address. Please
              try again or
              <Link href="/signup"> create a new account.</Link>
            </SignError>
          )}
          <InputField placeholder="Email or phone number" type="email" />
          <InputField placeholder="Password" type="password" />
          <Btn onClick={submitHandler}>Sign In</Btn>
          <RememberMe onRemember={() => setRemember((prev) => !prev)} />
        </Form>
        <HybridInfo />
      </Container>
    </Wrapper>
  );
}
