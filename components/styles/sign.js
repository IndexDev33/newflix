import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) =>
    props.borderColor
      ? props.borderColor
      : "1px solid rgba(255, 255, 255, 0.4)"};
  border-top: ${(props) => (props.borderColor ? props.borderColor : "unset")};
  min-height: 100vh;
  padding-top: 5rem;
  background-color: ${(props) => props.bgColor};
  /* margin-bottom: 1rem; */

  @media only screen and (min-width: 650px) {
    background: ${(props) =>
      props.bgWide
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg')`
        : "transparent"};
    background-position: center;
    background-size: cover;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  max-width: 500px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#000")};
  color: ${(props) => (props.color ? props.color : "#000")};
  /* min-height: 80vh; */

  @media only screen and (min-width: 650px) {
    padding: 60px 68px 40px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleForm = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 2.3rem;
`;

export const SignError = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 15px;
  width: 100%;
  a {
    text-decoration: underline;
  }
`;

export const Btn = styled.button`
  font-size: 1rem;
  min-height: 40px;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => (props.color ? props.color : "#e50914")};
  font-weight: 600;
`;
