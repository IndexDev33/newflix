import React, { useState } from "react";
import styled from "styled-components";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Link from "next/link";
import { gettingProfiles } from "../../hooks/database";
import CreateIcon from "@material-ui/icons/Create";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: unset;
  text-align: center;
`;

const Profiles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  gap: 3rem 1rem;
  padding: 0;
  /* height: 60%; */
`;

const Profile = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* height: 15vw; */
  /* width: 15vh; */
  font-size: 90px;
  color: grey;
  max-width: 40%;
`;

const ProfileImgContainer = styled.div`
  height: 24vw;
  width: 24vw;
  max-width: 120px;
  max-height: 120px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ProfileName = styled.p`
  font-size: 13px;
  padding: 0;
  color: grey;
  margin: 0.4rem;
`;

const ProfilesBtn = styled.button`
  display: block;
  margin: 4em 0 1em 0;
  border: 1px solid grey;
  color: grey;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
`;

const EditingProfile = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 30;
  font-size: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  & * {
    border-radius: 50%;
    border: #fff solid 2px;
    padding: 5px;
  }
`;

export default function BrowseProfiles({
  onCreating,
  profiles,
  onChooseAvatar,
}) {
  const [manage, setManage] = useState(false);
  const clickHandlerEditProfile = (profile) => {
    onCreating();
    onChooseAvatar({
      avatar: profile.avatar,
      name: profile.name,
      color: profile.color,
    });
  };
  const clickHandlerCreateProfile = () => {
    onCreating();
    onChooseAvatar({
      avatar: "https://avatars.dicebear.com/api/bottts/377.svg",
      color: `green`,
      name: "",
    });
  };

  return (
    <Container>
      <Title>Who's watching?</Title>
      <Profiles>
        {profiles.map((profile, i) => (
          <Link key={i} href="">
            <Profile>
              {manage && (
                <EditingProfile
                  onClick={() => clickHandlerEditProfile(profile)}
                >
                  <CreateIcon style={{ fontSize: "inherit" }} />
                </EditingProfile>
              )}
              <ProfileImgContainer color={profile.color}>
                <ProfileImage src={profile.avatar} />
              </ProfileImgContainer>
              <ProfileName>{profile.name}</ProfileName>
            </Profile>
          </Link>
        ))}
        <Profile onClick={() => clickHandlerCreateProfile()}>
          <ProfileImgContainer style={{ backgroundColor: "transparent" }}>
            <AddCircleOutlinedIcon style={{ fontSize: "inherit" }} />
          </ProfileImgContainer>
          <ProfileName>Add Profile</ProfileName>
        </Profile>
      </Profiles>
      <ProfilesBtn onClick={() => setManage(true)}>Manage Profiles</ProfilesBtn>
    </Container>
  );
}
