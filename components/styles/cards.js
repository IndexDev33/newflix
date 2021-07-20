import styled from "styled-components";

export const CardImage = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (props.variation ? "unset" : "2rem")};
  border-bottom: ${(props) =>
    props.variation
      ? "1px solid rgba(0, 0, 0, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.4)"};
  border-top: ${(props) =>
    props.variation ? "1px solid rgba(0, 0, 0, 0.1)" : "unset"};
  min-height: 100vh;

  @media only screen and (min-width: 650px) {
    background: ${(props) =>
      props.variation
        ? "transparent"
        : `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg')`};
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
  max-width: 450px;
  background-color: ${(props) => (props.variation ? props.variation : "#000")};
  min-height: 660px;

  @media only screen and (min-width: 650px) {
    padding: 60px 68px 40px;
  }
`;
