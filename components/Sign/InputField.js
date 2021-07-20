import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { useRouter } from "next/router";

const Input = styled.input`
  background: ${(props) => (props.variation ? "#fff" : "#333")};
  border-radius: 4px;
  border: ${(props) => (props.variation ? "solid 1px #000" : "0")};
  color: ${(props) => (props.variation ? "#000" : "#fff")};
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => (props.variation ? "red" : "#ffa00a")};
  font-size: 13px;
  width: 100%;
  margin-top: -0.6rem;

  @media only screen and (min-width: 950px) {
    grid-area: c;
    margin-top: 0;
  }
`;

export default function InputField({ type, placeholder, variation }) {
  const { emailSignUp, setErrorOnForm, setPassword, setEmail } =
    useContext(SignContext);
  const inputRef = useRef();
  const [errorOnInput, setErrorOnInput] = useState(null);

  const validating = () => {
    if (type === "email") {
      if (inputRef.current.value.length === 0) {
        setErrorOnInput(`Email is required`);
        setErrorOnForm(true);
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputRef.current.value)
      ) {
        setErrorOnInput(`Please enter a valid email.`);
        setErrorOnForm(true);
      } else {
        setErrorOnInput(null);
        setErrorOnForm(false);
        setEmail(inputRef.current.value);
      }
    }

    if (type === "password") {
      if (inputRef.current.value.length === 0) {
        setErrorOnInput(`Password is required`);
        setErrorOnForm(true);
      } else if (inputRef.current.value.length < 3) {
        setErrorOnInput(
          `Your password must contain between 4 and 60 characters.`
        );
        setErrorOnForm(true);
      } else {
        setErrorOnInput(null);
        setErrorOnForm(false);
        setPassword(inputRef.current.value);
      }
    }
  };

  return (
    <React.Fragment>
      <Input
        onChange={validating}
        variation={variation}
        defaultValue={type === "email" ? emailSignUp : ""}
        ref={inputRef}
        type={type}
        autocomplete={type}
        maxlength="50"
        minlength="4"
        placeholder={placeholder}
      />
      {errorOnInput && (
        <ErrorMessage variation={variation}>{errorOnInput}</ErrorMessage>
      )}
    </React.Fragment>
  );
}
