import React, { useState, useContext } from "react";
import styled from "styled-components";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Link from "next/link";
import CreateIcon from "@material-ui/icons/Create";
import UserContext from "../../store/user-context";
import Image from "next/image";
import {
  Container,
  ImgContainer,
  Title,
  ProfilesBtn,
} from "../styles/profiles";

const Profiles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 1rem;
  padding: 0;
`;

const Profile = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  font-size: 90px;
  color: grey;
`;

const ProfileName = styled.p`
  font-size: 13px;
  margin: 0.5rem;
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
  z-index: 3;
  font-size: 25px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  & * {
    border-radius: 50%;
    border: #fff solid 2px;
    padding: 3px;
  }
`;

export default function BrowseProfiles() {
  console.log("Browser Page Rendered");
  const { setAvatar, profiles, setStep } = useContext(UserContext);
  const [manage, setManage] = useState(false);

  const editHandler = ({ avatar, name, color }, index) => {
    setStep("editing");
    setAvatar({
      avatar,
      name,
      color,
      index,
    });
  };

  const createHandler = () => {
    setStep("creating");
    setAvatar({
      avatar: "https://avatars.dicebear.com/api/bottts/377.svg",
      color: "#0af07b",
      name: "",
      index: profiles.length,
    });
  };

  return (
    <Container>
      <Title align="center">Who's watching?</Title>
      <Profiles>
        {profiles.map((profile, i) => (
          <Link key={i} href="">
            <Profile onClick={() => editHandler(profile, i)}>
              <ImgContainer color={profile.color}>
                {manage && (
                  <EditingProfile>
                    <CreateIcon style={{ fontSize: "inherit" }} />
                  </EditingProfile>
                )}
                <Image
                  src={profile.avatar}
                  alt="Profile Image"
                  height="100"
                  width="100"
                />
              </ImgContainer>
              <ProfileName>{profile.name}</ProfileName>
            </Profile>
          </Link>
        ))}
        {profiles.length < 5 && (
          <Profile onClick={createHandler}>
            <ImgContainer style={{ backgroundColor: "transparent" }}>
              <AddCircleOutlinedIcon style={{ fontSize: "inherit" }} />
            </ImgContainer>
            <ProfileName>Add Profile</ProfileName>
          </Profile>
        )}
      </Profiles>
      <ProfilesBtn
        bgColor={manage ? "#fff" : "transparent"}
        onClick={() => setManage((prev) => !prev)}
      >
        {manage ? "Done" : "Manage Profiles"}
      </ProfilesBtn>
    </Container>
  );
}
