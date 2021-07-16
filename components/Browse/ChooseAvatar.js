import React from "react";
import styled from "styled-components";
import SmallCarousel from "./SmallCarousel";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

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
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Text = styled.div``;
const TitlePage = styled.h4`
  margin: 0;
  padding: 0;
`;
const SubtitlePage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

const ImgContainer = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function ChooseAvatar({ onChoosing, onChooseAvatar, avatar }) {
  return (
    <Container>
      <Controls>
        <Info>
          <div onClick={() => onChoosing(false)}>
            <ArrowBackIcon />
          </div>
          <Text>
            <TitlePage>Edit Profile</TitlePage>
            <SubtitlePage>Choose a profile icon.</SubtitlePage>
          </Text>
        </Info>
        <UserContainer>
          <SubtitlePage>usuario</SubtitlePage>
          <ImgContainer color={avatar[1]}>
            <Image
              src={avatar[0]}
              atl="profile avatar"
              width="50"
              height="50"
            />
          </ImgContainer>
        </UserContainer>
      </Controls>
      <SmallCarousel
        onChooseAvatar={onChooseAvatar}
        type="bottts"
        length="13"
      />
      <SmallCarousel onChooseAvatar={onChooseAvatar} type="gridy" length="7" />
      <SmallCarousel onChooseAvatar={onChooseAvatar} type="micah" length="7" />
      <SmallCarousel
        onChooseAvatar={onChooseAvatar}
        type="avataaars"
        length="7"
      />
      <SmallCarousel
        onChooseAvatar={onChooseAvatar}
        type="jdenticon"
        length="7"
      />
      <SmallCarousel onChooseAvatar={onChooseAvatar} type="human" length="15" />
      <SmallCarousel onChooseAvatar={onChooseAvatar} type="male" length="7" />
      <SmallCarousel onChooseAvatar={onChooseAvatar} type="female" length="7" />
    </Container>
  );
}
