import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { auth, provider } from "../firebase";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  padding: 0 5%;

  @media only screen and (min-width: 650px) {
    max-width: 450px;
    margin: 0 auto;
    border-bottom: none;
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 950px) {
    max-width: 350px;
  }
`;

const TitleForm = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 2rem;
`;

const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  width: 100%;
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

const ErrorMessage = styled.div`
  color: #ffa00a;
  font-size: 13px;
  width: 100%;
  margin-top: -0.6rem;

  @media only screen and (min-width: 950px) {
    grid-area: c;
    margin-top: 0;
  }
`;

const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

const LabelRemeberMe = styled.label`
  display: flex;
  align-items: center;
`;

const HybridInfo = styled.div`
  max-width: 550px;
  width: 100%;
  color: #737373;
  font-size: 12px;
  font-weight: 500;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: #fff;
  }
`;

const FacebookContainer = styled.div`
  max-height: 30px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 20px;
  }
`;

const InputCheck = styled.input`
  -webkit-appearance: none;
  position: relative;
  background-color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  overflow: hidden;

  &:checked:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
  }
  &:checked:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    width: 90%;
    height: 90%;
    background-color: #000;
    clip-path: polygon(34% 60%, 86% 7%, 99% 24%, 31% 92%, 0 50%, 15% 34%);
  }
`;

const SignUp = styled.div`
  display: flex;
  gap: 0.3rem;
  font-size: 1rem;
`;

const Leyend = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #8c8c8c;
  margin-bottom: 8rem;
  @media only screen and (min-width: 650px) {
    margin-bottom: 2rem;
  }
`;

export default function SignInCard({ bgImage, title }) {
  const [errorMail, setErrorMail] = useState(0);
  const [errorPassword, setErrorPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const signInHandler = (event) => {
    event.preventDefault();

    if (emailRef.current.value.length == 0) {
      setErrorMail(1);
    } else if (emailRef.current.value.length > 0) {
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailRef.current.value)
      ) {
        setErrorMail(2);
      } else {
        setErrorMail(0);
      }
    }
    if (passwordRef.current.value.length > 3) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }

    if (errorMail === 0 && !errorPassword) {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((user) => console.log(user))
        .catch((err) => console.log(err));
    }
  };

  const clickFacebook = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        console.log(user);
        var accessToken = credential.accessToken;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  //TODO: Missed Help Page
  //TODO: Missed State for logIn
  return (
    <Container>
      <TitleForm>Sign In</TitleForm>
      <Form>
        <Input
          ref={emailRef}
          type="email"
          tabindex="0"
          autocomplete="email"
          maxlength="50"
          minlength="5"
          placeholder="Email or phone number"
        />
        {errorMail > 0 && (
          <ErrorMessage>
            {errorMail === 1
              ? "Email is required"
              : "Please enter a valid email address"}
          </ErrorMessage>
        )}
        <Input
          ref={passwordRef}
          type="password"
          tabindex="0"
          autocomplete="password"
          maxlength="50"
          minlength="5"
          placeholder="Password"
        />
        {errorPassword && (
          <ErrorMessage>
            Your password must contain between 4 and 60 characters.
          </ErrorMessage>
        )}
        <Btn onClick={() => signInHandler(event)}>Sign In</Btn>
        <RememberMe>
          <LabelRemeberMe htmlfor="rememberMe">
            <InputCheck
              type="checkbox"
              name="rememberMe"
              tabIndex="0"
              data-uia="rememberMe"
            />
            <span>Remember me</span>
          </LabelRemeberMe>
          <Link href="/">Need help?</Link>
        </RememberMe>
      </Form>
      <HybridInfo>
        <FacebookContainer onClick={clickFacebook}>
          <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
          Login with Facebook
        </FacebookContainer>
        <SignUp>
          New to Netflix?
          <Link href="/">Sign up now</Link>
        </SignUp>
        <Leyend>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link href="/">Learn more</Link>
        </Leyend>
      </HybridInfo>
    </Container>
  );
}
