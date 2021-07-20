import React from "react";
import styled from "styled-components";
import CardWrapper from "./CardWrapper";
import { CardImage } from "../styles/cards";

const CardAnimation = styled.div`
  position: relative;
  max-width: 550px;
  @media only screen and (min-width: 950px) {
    width: 85%;
  }
`;

const CardAnimationVideo = styled.video`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth};
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function VideoCard({
  bgImage,
  title,
  subtitle,
  video,
  image,
  maxWidth,
  top,
}) {
  return (
    <CardWrapper
      bgImage={bgImage}
      title={title}
      subtitle={subtitle}
      direction="row"
    >
      <CardAnimation>
        <CardImage src={image} />
        <CardAnimationVideo
          top={top}
          maxWidth={maxWidth}
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </CardAnimation>
    </CardWrapper>
  );
}
