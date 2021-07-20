import React from "react";
import styled from "styled-components";
import CardWrapper from "./CardWrapper";
import { CardImage } from "../styles/cards";

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
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translateX(-50%);
  background: #000;
  width: 55%;
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
    background: url(${(props) => props.gif}) center center no-repeat;
    background-size: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  }

  @media only screen and (min-width: 950px) {
    width: 65%;
  }
`;

const TextGif = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

const SerieGif = styled.div`
  font-weight: 600;
  font-size: 0.9em;
`;

const DownloadTextGif = styled.div`
  color: #0071eb;
  font-size: 0.75em;
`;

const Cover = styled.img`
  margin: 0 1em 0 0;
  flex-grow: 0;
  flex-shrink: 0;
  height: 3em;

  @media only screen and (min-width: 650px) {
    height: 4em;
  }
`;

export default function GifCard({ title, subtitle, image, gif }) {
  return (
    <CardWrapper title={title} subtitle={subtitle} direction="row-reverse">
      <Container>
        <CardImage src={image} />
        <GifContainer gif={gif}>
          <Cover
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          />
          <TextGif>
            <SerieGif>Stranger Things</SerieGif>
            <DownloadTextGif>Downloading...</DownloadTextGif>
          </TextGif>
        </GifContainer>
      </Container>
    </CardWrapper>
  );
}
