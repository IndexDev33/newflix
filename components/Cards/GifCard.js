import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 550px;
  @media only screen and (min-width: 950px) {
    width: 85%;
  }
`;
const GifContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  background: #000;
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 15em;
  padding: 0.25em 0.65em;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 2em 0 #000;
  border-radius: 0.75em;
  z-index: 30;

  &::after {
    content: "";
    width: 3em;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    display: block;
    background: url(${(props) => props.gif}) center center no-repeat;
    background-size: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  }

  @media only screen and (min-width: 950px) {
    width: 50%;
  }
`;

const CardAnimationImage = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const Text = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.3em 0;
`;

const Serie = styled.div`
  font-weight: 600;
  font-size: 0.9em;
`;
const Download = styled.div`
  color: #0071eb;
  font-weight: 400;
  font-size: 0.75em;
`;

const Cover = styled.img`
  margin: 0 1em 0 0;
  flex-grow: 0;
  flex-shrink: 0;
  height: 3em;
`;

export default function GifCard({ gif, image }) {
  return (
    <Container>
      <CardAnimationImage src={image} />
      <GifContainer gif={gif}>
        <Cover
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
        />
        <Text>
          <Serie>Stranger Things</Serie>
          <Download>Downloading...</Download>
        </Text>
      </GifContainer>
    </Container>
  );
}
