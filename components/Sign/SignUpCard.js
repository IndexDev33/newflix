import React, { useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";

import SignContext from "../../store/signing-context";
import InputField from "./InputField";

import Link from "next/link";
import styled from "styled-components";
import {
  Form,
  TitleForm,
  SignError,
  Btn,
  Wrapper,
  Container,
} from "../styles/sign";

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

export default function SignUpCard() {
  const [signError, setSignError] = useState(null);
  const { emailSignUp, setUserId, errorOnForm, password } =
    useContext(SignContext);
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!errorOnForm) {
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
    <Wrapper borderColor="1px solid rgba(0, 0, 0, 0.3)">
      <Container bgColor="transparent">
        <Step>Unique Step</Step>
        <TitleForm>Create a password to start your membership</TitleForm>
        <LeyendSignUp>
          <LeyendSignUpText>
            Just a few more steps and you're done!
          </LeyendSignUpText>
          <LeyendSignUpText>We hate paperwork, too.</LeyendSignUpText>
        </LeyendSignUp>
        <Form>
          {signError === "auth/email-already-in-use" && (
            <SignError>
              Looks like that account already exists.{" "}
              <Link href="/signin">Sign into that account</Link>
            </SignError>
          )}
          <InputField
            variation={true}
            placeholder="Email or phone number"
            type="email"
          />
          <InputField variation={true} placeholder="Password" type="password" />
          <Btn onClick={submitHandler}>Create Account</Btn>
        </Form>
      </Container>
    </Wrapper>
  );
}
