import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import CardWrapper from "./CardWrapper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useRouter } from "next/router";
import SignContext from "../../store/signing-context";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1100px;
  padding: 10px;
`;

const TitleForm = styled.h3`
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0;
  text-align: center;

  @media only screen and (min-width: 550px) {
    font-size: 1.2rem;
  }
`;

const ContainerInput = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 950px) {
    display: grid;
    grid-template-areas: "a b" "c c";
    grid-template-columns: 65% 35%;
    gap: 0;
  }
`;

const Input = styled.input`
  min-height: 48px;
  padding: 10px;
  width: 100%;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Netflix", serif;

  @media only screen and (min-width: 950px) {
    height: 100%;
  }
`;

const Btn = styled.button`
  justify-self: center;
  font-size: 1rem;
  min-height: 40px;
  flex: 1 1 auto;
  padding: 0 1em;
  cursor: pointer;
  letter-spacing: 0.1px;
  border: none;
  border-radius: 2px;
  color: #fff;
  background-color: #e50914;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media only screen and (min-width: 950px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
    min-height: 60px;
  }
`;

const IconContainer = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 950px) {
    font-size: 25px;
  }
`;

const ErrorMessage = styled.div`
  color: #ffa00a;
  text-align: left;
  margin-bottom: -6px;
  padding: 6px 3px;
  font-size: 15px;
  width: 100%;
  margin-top: -1rem;
  padding: 0;
  @media only screen and (min-width: 950px) {
    grid-area: c;
    margin-top: 0;
  }
`;

export default function InputCard({ bgImage, title, subtitle, inline }) {
  const router = useRouter();
  const [errorMail, setErrorMail] = useState(null);
  const inputRef = useRef();
  const { setEmail } = useContext(SignContext);

  const messageValidate = (
    <ErrorMessage>
      {errorMail === 1
        ? "Email is required"
        : "Please enter a valid email address"}
    </ErrorMessage>
  );

  const clickHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value.length == 0) {
      setErrorMail(1);
      return;
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRef.current.value)
    ) {
      setErrorMail(2);
    } else {
      setErrorMail(0);
      router.push("/signup");
      setEmail(inputRef.current.value);
    }
  };

  const renderWithContainer = inline ? (
    <Form>
      <TitleForm>
        Ready to watch? Enter your email to create or restart your membership.
      </TitleForm>
      <ContainerInput>
        <Input
          ref={inputRef}
          type="email"
          tabindex="0"
          autocomplete="email"
          maxlength="50"
          minlength="5"
          placeholder="Email Address"
        />
        {errorMail > 0 && messageValidate}
        <Btn onClick={() => clickHandler(event)}>
          Get Started
          <IconContainer>
            <ArrowForwardIosIcon style={{ fontSize: "inherit" }} />
          </IconContainer>
        </Btn>
      </ContainerInput>
    </Form>
  ) : (
    <CardWrapper
      bgImage={bgImage}
      title={title}
      subtitle={subtitle}
      main={true}
    >
      <Form>
        <TitleForm>
          Ready to watch? Enter your email to create or restart your membership.
        </TitleForm>
        <ContainerInput>
          <Input
            ref={inputRef}
            type="email"
            tabindex="0"
            autocomplete="email"
            maxlength="50"
            minlength="5"
            placeholder="Email Address"
          />
          {errorMail > 0 && messageValidate}
          <Btn onClick={() => clickHandler(event)}>
            Get Started
            <IconContainer>
              <ArrowForwardIosIcon style={{ fontSize: "inherit" }} />
            </IconContainer>
          </Btn>
        </ContainerInput>
      </Form>
    </CardWrapper>
  );

  return <React.Fragment>{renderWithContainer}</React.Fragment>;
}
