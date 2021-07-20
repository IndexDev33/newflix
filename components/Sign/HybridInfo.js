import React, { useContext, useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { useRouter } from "next/router";

import SignContext from "../../store/signing-context";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
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
`;

const SignUp = styled.div`
  display: flex;
  gap: 0.3rem;
  font-size: 1rem;
`;

const Leyend = styled.div`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #8c8c8c;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: #2a9df4;
  }

  @media only screen and (min-width: 650px) {
    margin-bottom: 2rem;
  }
`;

export default function HybridInfo() {
  const { setUserId } = useContext(SignContext);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const router = useRouter();
  const clickFacebook = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        router.push("/profiles");
        setUserId(user.providerData[0].uid);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <FacebookContainer onClick={clickFacebook}>
        <Image
          src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
          width="20"
          height="20"
        />
        Login with Facebook
      </FacebookContainer>
      <SignUp>
        New to Netflix?
        <Link href="/">Sign up now</Link>
      </SignUp>
      <Leyend>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        {!showDisclaimer && (
          <a onClick={() => setShowDisclaimer(true)}>Learn more</a>
        )}
        {showDisclaimer && (
          <div>
            The information collected by Google reCAPTCHA is subject to the
            Google{" "}
            <a target="_blank" href="https://policies.google.com/privacy">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://policies.google.com/terms">
              Terms of Service
            </a>
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes (it is not used
            for personalized advertising by Google).
          </div>
        )}
      </Leyend>
    </Container>
  );
}
