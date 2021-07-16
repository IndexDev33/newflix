import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { auth, provider, database } from "../firebase/firebase";
import { useRouter } from "next/router";
import SignContext from "../../store/signing-context";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) =>
    props.signUpCard
      ? "1px solid rgba(0, 0, 0, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.4)"};
  border-top: ${(props) =>
    props.signUpCard ? "1px solid rgba(0, 0, 0, 0.1)" : "unset"};
  padding: 0 5%;
  min-height: calc(100vh - 64px);

  @media only screen and (min-width: 650px) {
    background: ${(props) => props.stylesMainBg};
    background-position: center;
    background-size: cover;
  }
`;

const Container = styled.div`
  max-width: 450px;
  background-color: ${(props) => (props.signUpCard ? "#fff" : "#000")};
  min-height: 660px;

  @media only screen and (min-width: 650px) {
    padding: 60px 68px 40px;
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 950px) {
  }
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
  /* margin: 0 0 16px; */
  padding: 10px 15px;
  width: 100%;
  a {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  background: ${(props) => (props.signUpCard ? "#fff" : "#333")};
  border-radius: 4px;
  border: ${(props) => (props.signUpCard ? "solid 1px #000" : "0")};
  color: ${(props) => (props.signUpCard ? "#000" : "#fff")};
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
  color: ${(props) => (props.signUpCard ? "red" : "#ffa00a")};
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

  a {
    color: #2a9df4;
  }
  @media only screen and (min-width: 650px) {
    margin-bottom: 2rem;
  }
`;

export default function SignInCard({ signUpCard, title }) {
  const [errorMail, setErrorMail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [signError, setSignError] = useState(null);
  const [remember, setRemember] = useState(false);
  const { emailSignUp, toggleLogIn, setUserId } = useContext(SignContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const postingData = (userId) => {
    const DUMMY_PROFILES = [
      {
        name: "luzda1",
        avatar: "https://avatars.dicebear.com/api/avataaars/luzda1.svg",
        color: "red",
      },
      {
        name: "oddie1",
        avatar: "https://avatars.dicebear.com/api/bottts/oddie1.svg",
        color: "red",
      },
      {
        name: "kira2",
        avatar: "https://avatars.dicebear.com/api/micah/kira2.svg",
        color: "red",
      },
    ];
    // const DUMMY_PROFILES = [
    //   [
    //     "luzda1",
    //     "https://avatars.dicebear.com/api/avataaars/luzda1.svg",
    //     "red",
    //   ],

    //   ["oddie1", "https://avatars.dicebear.com/api/bottts/oddie1.svg", "red"],

    //   ["kira2", "https://avatars.dicebear.com/api/micah/kira2.svg", "red"],

    //   ["kiara3", "https://avatars.dicebear.com/api/gridy/kiara3.svg", "red"],
    // ];
    database.ref("users/" + userId + "/profiles").set(DUMMY_PROFILES);
  };

  const stylesMainBg =
    router.pathname === "/signup"
      ? "transparent"
      : `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg')`;

  const submitHandler = (event) => {
    event.preventDefault();
    const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      emailRef.current.value
    );
    const checkPassword = passwordRef.current.value.length > 3;

    setErrorMail(!checkEmail);
    setErrorPassword(!checkPassword);

    const passingChecks = checkEmail && checkPassword;

    if (passingChecks && router.pathname === "/signup") {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((user) => {
          setSignError(null);
          toggleLogIn(true);
          router.push("/browse");
          setUserId(user.user.uid);
          postingData(user.user.uid);
        })
        .catch((err) => {
          setSignError(err.code);
          toggleLogIn(false);
        });
    }
    if (passingChecks && router.pathname === "/signin") {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((user) => {
          setSignError(null);
          toggleLogIn(true);
          router.push("/browse");
          setUserId(user.user.uid);

          remember && localStorage.setItem("userId", user.user.uid);
          remember && localStorage.setItem("email", emailRef.current.value);
          remember &&
            localStorage.setItem("password", passwordRef.current.value);
        })
        .catch((err) => {
          setSignError(err.code);
          toggleLogIn(false);
        });
    }
  };

  const clickFacebook = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        // console.log(user, user.providerData[0].uid);
        router.push("/browse");
        toggleLogIn(true);
        setUserId(user.providerData[0].uid);
        // gettingInfo(user.user.uid, { name: 1, use: 2 });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var email = error.email;
        var credential = error.credential;
      });
  };
  //TODO: Missed Learn More Page
  //TODO: Missed recovering password
  return (
    <Wrapper stylesMainBg={stylesMainBg} signUpCard={signUpCard}>
      <Container signUpCard={signUpCard}>
        {signUpCard && <Step>Unique Step</Step>}
        <TitleForm>{title}</TitleForm>
        {signUpCard && (
          <LeyendSignUp>
            <LeyendSignUpText>
              Just a few more steps and you're done!
            </LeyendSignUpText>
            <LeyendSignUpText>We hate paperwork, too.</LeyendSignUpText>
          </LeyendSignUp>
        )}
        <Form onSubmit={() => submitHandler(event)}>
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
          <Input
            defaultValue={emailSignUp}
            signUpCard={signUpCard}
            ref={emailRef}
            type="email"
            autocomplete="email"
            maxlength="50"
            minlength="6"
            placeholder="Email or phone number"
          />
          {errorMail && (
            <ErrorMessage signUpCard={signUpCard}>
              {emailRef.current.value.length == 0
                ? "Email is required"
                : "Please enter a valid email address"}
            </ErrorMessage>
          )}
          <Input
            signUpCard={signUpCard}
            ref={passwordRef}
            type="password"
            autocomplete="password"
            maxlength="50"
            minlength="6"
            placeholder="Password"
          />
          {errorPassword && (
            <ErrorMessage signUpCard={signUpCard}>
              Your password must contain between 6 and 60 characters.
            </ErrorMessage>
          )}
          {/* <Link href="#">Forgot your password?</Link> */}
          <Btn>{signUpCard ? "Next" : "Sign In"}</Btn>
          {!signUpCard && (
            <RememberMe>
              <LabelRemeberMe htmlfor="rememberMe">
                <InputCheck
                  onClick={() => setRemember((prev) => !prev)}
                  type="checkbox"
                  name="rememberMe"
                  tabIndex="0"
                  data-uia="rememberMe"
                />
                <span>Remember me</span>
              </LabelRemeberMe>
              <Link href="/">Need help?</Link>
            </RememberMe>
          )}
        </Form>
        {!signUpCard && (
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
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <Link href="/">Learn more</Link>
            </Leyend>
          </HybridInfo>
        )}
      </Container>
    </Wrapper>
  );
}
