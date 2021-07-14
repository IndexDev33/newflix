import React from "react";
import SignIn from "../../components/Cards/SignIn";
import Footer from "../../components/Cards/Footer";
import styled from "styled-components";

const SignInWrapper = styled.div`
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

const StandartData = {
  title: "Sign In",
  subtitle:
    "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  image:
    "https://occ-0-2976-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
};

export default function login() {
  return (
    <SignInWrapper>
      <SignIn {...StandartData} />
      <Footer {...FooterData} big={true} />
    </SignInWrapper>
  );
}
