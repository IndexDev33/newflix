import React from "react";
import styled from "styled-components";
import CartContainer from "./CardContainer";

const CardAnimation = styled.div`
  position: relative;
  max-width: 550px;
  @media only screen and (min-width: 950px) {
    width: 85%;
  }
`;

const CardAnimationImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border: 0;
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
    <CartContainer
      bgImage={bgImage}
      title={title}
      subtitle={subtitle}
      direction="row"
    >
      <CardAnimation>
        <CardAnimationImage src={image} />
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
    </CartContainer>
  );
}