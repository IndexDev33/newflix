import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.homePage ? "8px solid #222" : "unset")};
  padding: 60px 5%;
  margin-bottom: 0;
  background: ${(props) => props.stylesMainBg};
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 550px) {
    padding: ${(props) => (props.main ? "120px 10% 150px 10%" : "70px 45px")};
  }

  @media only screen and (min-width: 950px) {
    flex-direction: ${(props) => props.direction};
  }

  @media only screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  max-width: 550px;
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 0;
  height: 100%;
  flex: 0 1 auto;
  z-index: 3;

  @media only screen and (min-width: 950px) {
    text-align: ${(props) => (props.main ? "center" : "left")};
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  @media only screen and (min-width: 550px) {
    font-size: ${(props) => (props.main ? "3.125rem" : "2.5rem")};
  }
  @media only screen and (min-width: 950px) {
    padding: 0 15%;
    margin-left: 0;
    padding: 0;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0.5rem 1rem;
  @media only screen and (min-width: 550px) {
    font-size: ${(props) => (props.main ? "1.7rem" : "1.5rem")};
  }
  @media only screen and (min-width: 950px) {
    margin-left: 0;
    padding: 0;
  }
`;

export default function CardContainer({
  children,
  bgImage,
  title,
  subtitle,
  direction,
  main,
}) {
  const { pathname } = useRouter();

  // const stylesMainBg = main
  //   ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('${bgImage}')`
  //   : "";

  const stylesMainBg =
    pathname === "/signup"
      ? "#f3f3f3"
      : main
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('${bgImage}')`
      : "";

  return (
    <Container
      stylesMainBg={stylesMainBg}
      bgImage={bgImage}
      direction={direction}
      main={main}
      homePage={pathname === "/"}
    >
      {title && (
        <TextContainer main={main}>
          <Title main={main}>{title}</Title>
          <Subtitle main={main}>{subtitle}</Subtitle>
        </TextContainer>
      )}

      {children}
    </Container>
  );
}
