import React, { useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";

import SignContext from "../../store/signing-context";
import RememberMe from "./RememberMe";
import InputField from "./InputField";
import HybridInfo from "./HybridInfo";

import { Wrapper, Container } from "../styles/cards";
import Link from "next/link";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleForm = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 2.3rem;
`;

const LeyendSignUp = styled.div`
  margin-top: -1rem;
  width: 100%;
`;

const LeyendSignUpText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

const Step = styled.p`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-bottom: -1.5rem;
  margin-top: 2rem;
`;

const SignError = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 15px;
  width: 100%;
  a {
    text-decoration: underline;
  }
`;

const Btn = styled.button`
  font-size: 1rem;
  min-height: 40px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
`;

export default function SignInCard({ title }) {
  const [signError, setSignError] = useState(null);
  const [remember, setRemember] = useState(false);
  const { emailSignUp, setUserId, errorOnForm, password } =
    useContext(SignContext);
  const router = useRouter();
  const { pathname } = useRouter();
  const signUpCard = pathname === "/signup";

  const submitHandler = (event) => {
    event.preventDefault();
    if (!errorOnForm && !signUpCard) {
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
    if (!errorOnForm && signUpCard) {
      auth
        .createUserWithEmailAndPassword(emailSignUp, password)
        .then((user) => {
          setSignError(null);
          router.push("/profiles");
          setUserId(user.user.uid);
        })
        .catch((err) => {
          setSignError(err.code);
        });
    }
  };

  return (
    <Wrapper variation={signUpCard}>
      <Container variation={signUpCard}>
        {signUpCard && <Step>Unique Step</Step>}
        <TitleForm>
          {signUpCard
            ? "Create a password to start your membership"
            : "Sign In"}
        </TitleForm>
        {signUpCard && (
          <LeyendSignUp>
            <LeyendSignUpText>
              Just a few more steps and you're done!
            </LeyendSignUpText>
            <LeyendSignUpText>We hate paperwork, too.</LeyendSignUpText>
          </LeyendSignUp>
        )}
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
          {signError === "auth/email-already-in-use" && (
            <SignError>
              Looks like that account already exists.{" "}
              <Link href="/signin">Sign into that account</Link>
            </SignError>
          )}
          <InputField placeholder="Email or phone number" type="email" />
          <InputField placeholder="Password" type="password" />
          {signUpCard && <Link href="#">Forgot your password?</Link>}
          <Btn onClick={submitHandler} minus={true}>
            {signUpCard ? "Next" : "Sign In"}
          </Btn>
          {!signUpCard && (
            <RememberMe onRemember={() => setRemember((prev) => !prev)} />
          )}
        </Form>
        {!signUpCard && <HybridInfo />}
      </Container>
    </Wrapper>
  );
}
