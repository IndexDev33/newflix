import React from "react";
import Sign from "../../components/Sign/SignCard";
import Footer from "../../components/Cards/Footer";
import styled from "styled-components";

const SignUpWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterData = {
  links: [
    {
      name: "FAQ",
      url: "/",
    },
    {
      name: "Help Center",
      url: "/",
    },
    {
      name: "Terms of Use",
      url: "/",
    },
    {
      name: "Privacy",
      url: "/",
    },
    {
      name: "Cookie Preferences",
      url: "/",
    },
    {
      name: "Corporate Information",
      url: "/",
    },
  ],
};

export default function SignUp() {
  return (
    <SignUpWrapper>
      <Sign
        signUpCard={true}
        title="Create a password to start your membership"
      />
      <Footer {...FooterData} big={true} signUpCard={true} />
    </SignUpWrapper>
  );
}
