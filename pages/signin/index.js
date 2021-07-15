import React from "react";
import Sign from "../../components/Sign/SignCard";
import Footer from "../../components/Cards/Footer";
import styled from "styled-components";

const SignInWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-image: url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"); */
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

export default function SignIn() {
  return (
    <SignInWrapper>
      <Sign title="Sign In" />
      <Footer {...FooterData} big={true} />
    </SignInWrapper>
  );
}
