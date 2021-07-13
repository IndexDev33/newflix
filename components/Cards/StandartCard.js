import React from "react";
import styled from "styled-components";

const CardAnimation = styled.div`
  position: relative;
`;
const CardAnimationImage = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

export default function StandartCard({ image }) {
  return (
    <CardAnimation>
      <CardAnimationImage src={image} />
    </CardAnimation>
  );
}
