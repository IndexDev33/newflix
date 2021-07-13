import React from "react";
import styled from "styled-components";
import InputCard from "./InputCard";
import VideoCard from "./VideoCard";
import GifCard from "./GifCard";
import StandartCard from "./StandartCard";
import QuestionsCard from "./QuestionsCard";
import FooterCard from "./FooterCard";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  /* max-width: 1100px; */
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("${(props) => props.bgImage}") center/cover;
  &:last-child {
    padding: 50px 5% 0;
  }

  @media only screen and (min-width: 550px) {
    padding: 70px 45px;

    &:nth-child(1) {
      padding: 80px 10% 150px 10%;
    }
    &:nth-child(1) h1 {
      font-size: 3.125rem;
    }
    &:nth-child(1) h2 {
      font-size: 1.625rem;
    }
    &:nth-child(1) h3 {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 950px) {
    flex-direction: row;
    &:nth-child(1),
    &:nth-child(6) {
      flex-direction: column;
    }
    &:nth-child(3),
    &:nth-child(5) {
      flex-direction: row-reverse;
    }
  }
  @media only screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  max-width: 550px;
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 0;
  height: 100%;
  flex: 0 1 auto;
  z-index: 3;
  @media only screen and (min-width: 950px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  @media only screen and (min-width: 550px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 950px) {
    padding: 0 15%;
    margin-left: 0;
    padding: 0;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0.5rem 1rem;
  @media only screen and (min-width: 950px) {
    font-size: 1.5rem;
    margin-left: 0;
    padding: 0;
  }
`;

export default function Card({
  bgImage,
  title,
  subtitle,
  input,
  video,
  gif,
  image,
  maxWidth,
  top,
  questions,
  links,
}) {
  return (
    <Container bgImage={bgImage}>
      {!links && (
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
      )}
      {video && (
        <VideoCard image={image} video={video} top={top} maxWidth={maxWidth} />
      )}
      {gif && <GifCard gif={gif} image={image} />}
      {questions && <QuestionsCard questions={questions} />}
      {(input || questions) && <InputCard />}
      {links && <FooterCard links={links} />}
      {!gif && !video && !input && !questions && <StandartCard image={image} />}
    </Container>
  );
}
