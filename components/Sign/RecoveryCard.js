import React, { useState, useContext } from "react";
import { auth } from "../firebase/firebase";

import SignContext from "../../store/signing-context";
import InputField from "./InputField";

import styled from "styled-components";

import {
  Form,
  TitleForm,
  Btn,
  SignError,
  Wrapper,
  Container,
} from "../styles/sign";

const LeyendSignUpText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const TypeRecovery = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const Leyend = styled.div`
  color: grey;

  a {
    text-decoration: underline;
  }
`;

const ErrorLeyend = styled.div`
  span {
    font-weight: 600;
  }
`;

export default function Recovery() {
  const { emailSignUp } = useContext(SignContext);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [signError, setSignError] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(emailSignUp)
      .then(() => {
        setSignError(1);
      })
      .catch(() => {
        setSignError(0);
      });
  };

  return (
    <Wrapper bgColor="#f3f3f3">
      <Container bgColor="#f3f3f3">
        <Form>
          <TitleForm>
            {signError == 1 ? "Email Sent" : "Forgot Email/Password"}
          </TitleForm>
          {signError === 0 && (
            <SignError>No account found for this email address</SignError>
          )}
          {signError === 1 && (
            <ErrorLeyend>
              <p>
                An email with instructions on how to reset your password has
                been sent to <span>{emailSignUp}</span> Check your spam or junk
                folder if you don’t see the email in your inbox.
              </p>
              <p>
                If you no longer have access to this email account, please
                contact us.
              </p>
            </ErrorLeyend>
          )}

          {signError !== 1 && (
            <React.Fragment>
              <LeyendSignUpText>
                How would you like to reset your password?
              </LeyendSignUpText>
              <TypeRecovery>
                <div>
                  <input name="resetPassword" type="radio" />{" "}
                  <label>Email</label>
                </div>
              </TypeRecovery>
              <LeyendSignUpText>
                We will send you an email with instructions on how to reset your
                password.
              </LeyendSignUpText>
              <InputField
                variation={true}
                placeholder="name@example.com"
                type="email"
              />
              <Btn onClick={submitHandler} color="#0080ff">
                Email Me
              </Btn>
              <a style={{ color: "#2a9df4" }}>I don't remember my email.</a>
            </React.Fragment>
          )}
          <Leyend>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            {!showDisclaimer && (
              <a
                style={{ textDecoration: "underline" }}
                onClick={() => setShowDisclaimer(true)}
              >
                Learn more.
              </a>
            )}
          </Leyend>

          {showDisclaimer && (
            <div style={{ color: "grey" }}>
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                href="https://policies.google.com/terms"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
            </div>
          )}
        </Form>
      </Container>
    </Wrapper>
  );
}
