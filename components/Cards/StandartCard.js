import React from "react";
import styled from "styled-components";
import CardWrapper from "./CardWrapper";

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

export default function StandartCard({ bgImage, title, subtitle, image }) {
  return (
    <CardWrapper
      bgImage={bgImage}
      title={title}
      subtitle={subtitle}
      direction="row-reverse"
    >
      <CardAnimation>
        <CardAnimationImage src={image} />
      </CardAnimation>
    </CardWrapper>
  );
}
