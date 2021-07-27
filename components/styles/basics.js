import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: ${(props) => (props.variation ? "4rem" : "unset")};
  flex-direction: column;
  min-height: 100vh;
  justify-content: ${(props) => (props.align ? "flex-start" : "center")};
  /* justify-content: center; */
  align-items: center;
  gap: 0.5rem;
  outline: solid red 5px;

  & * {
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "450px")};
  }
`;

export const ImgContainer = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: unset;
  text-align: center;
  margin: 0;

  @media only screen and (min-width: 650px) {
    text-align: ${(props) => props.align};
  }
`;

export const ProfilesBtn = styled.button`
  margin: 1rem 0;
  border: 1px solid grey;
  color: ${(props) => (props.bgColor === "fff" ? "#000" : "grey")};
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 1px;
  cursor: pointer;
  font-weight: ${(props) => (props.bgColor === "#fff" ? "600" : "100")};
  font-size: 13px;
  background-color: ${(props) => props.bgColor};
`;

export const Input = styled.input`
  background-color: ${(props) => (props.color ? "#fff" : "#333")};
  border-radius: 5px;
  border: ${(props) => (props.color ? "solid 1px #000" : "none")};
  color: ${(props) => (props.color ? "#000" : "#fff")};
  height: ${(props) => (props.small ? "2rem" : "3rem")};
  padding: ${(props) => (props.small ? "0.5rem" : "1rem 1rem 0")};
  outline: ${(props) => (props.error ? "1px solid red" : "unset")};

  &:focus {
    outline: none;
  }
`;

export const CheckBox = styled.input`
  position: relative;
  background-color: ${(props) => props.bgColor};
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid grey 1px;
  overflow: hidden;

  &:checked {
    background-color: ${(props) =>
      props.bgColor === "#fff" ? "grey" : "transparent"};
  }

  &:checked:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    width: 90%;
    height: 90%;
    background-color: ${(props) =>
      props.bgColor === "#fff" ? "#000" : "grey"};
    clip-path: polygon(34% 60%, 86% 7%, 99% 24%, 31% 92%, 0 50%, 15% 34%);
  }
`;

export const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
