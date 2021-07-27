import React, { useContext } from "react";
import styled from "styled-components";
import SmallCarousel from "./SmallCarousel";
import Image from "next/image";
import UserContext from "../../store/user-context";
import { Container, ImgContainer } from "../styles/basics";
import { ArrowBack } from "@material-ui/icons";

const Controls = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 0;
  height: 50px;
  z-index: 10;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.div`
  & * {
    margin: 0;
    padding: 0;
  }
`;

const SubtitlePage = styled.p`
  font-size: 13px;
`;

const arrayCarousels = [
  { type: "avataaars", lengthCarousel: 15 },
  { type: "bottts", lengthCarousel: 10 },
  { type: "female", lengthCarousel: 3 },
  { type: "gridy", lengthCarousel: 10 },
  { type: "human", lengthCarousel: 5 },
  { type: "identicon", lengthCarousel: 8 },
  { type: "jdenticon", lengthCarousel: 12 },
  { type: "male", lengthCarousel: 3 },
  { type: "micah", lengthCarousel: 10 },
];

export default function ChooseAvatar() {
  const { avatar, setStep, step } = useContext(UserContext);
  return (
    <Container maxWidth="100vw" variation={true} align={true}>
      <Controls>
        <InfoContainer>
          <div onClick={() => setStep(step.split("-")[0])}>
            <ArrowBack />
          </div>
          <Text>
            <h4>Edit Profile</h4>
            <SubtitlePage>Choose a profile icon.</SubtitlePage>
          </Text>
        </InfoContainer>
        <InfoContainer>
          <SubtitlePage>{avatar.name}</SubtitlePage>
          <ImgContainer color={avatar.color}>
            <Image
              src={avatar.avatar}
              atl="profile avatar"
              width="50"
              height="50"
            />
          </ImgContainer>
        </InfoContainer>
      </Controls>
      {arrayCarousels.map(({ type, lengthCarousel }) => (
        <SmallCarousel key={type} type={type} length={lengthCarousel} />
      ))}
    </Container>
  );
}
