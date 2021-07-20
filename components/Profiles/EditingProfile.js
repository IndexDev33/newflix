import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { Create } from "@material-ui/icons";
import UserContext from "../../store/user-context";
import { database } from "../firebase/firebase";
import {
  Container,
  ImgContainer,
  Title,
  ProfilesBtn,
  Input,
  CheckBox,
} from "../styles/basics";
import Image from "next/image";

const Subtitle = styled.p`
  margin: 0;
  color: grey;
  font-size: 13px;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 650px) {
    text-align: left;
  }
`;

const NewProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
  /* max-width: 450px; */

  @media only screen and (min-width: 650px) {
    margin: 0 auto;
    flex-direction: row;
    border-top: solid rgba(255, 255, 255, 0.5) 1px;
    border-bottom: solid rgba(255, 255, 255, 0.5) 1px;
    padding: 1rem 0;
  }
`;

const Icon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: grey;
  right: -5px;
  bottom: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 18px;
  color: #000;
  z-index: 3;
`;

const CheckKidsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  @media only screen and (min-width: 650px) {
    flex-direction: row-reverse;
  }
`;

const ContainerBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SignError = styled.div`
  color: red;
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
`;

export default function EditingProfile({ userId }) {
  const { avatar, profiles, setAvatar, setStep, step, setProfiles } =
    useContext(UserContext);
  const [errorName, setErrorName] = useState(false);
  const userNameRef = useRef(null);
  const creatingProfileHandler = () => {
    if (userNameRef.current.value.length > 0) {
      setStep("showing");
      setErrorName(false);
      const avatarFetched = avatar;
      const profilesFetched = profiles;
      avatarFetched.name = userNameRef.current.value;
      profilesFetched[profiles.length] = avatarFetched;

      setProfiles(profilesFetched);
      database
        .ref("users/" + userId + "/profiles/" + avatar.index)
        .update(avatarFetched);
    } else {
      setErrorName(true);
    }
  };

  const deleteHandler = () => {
    setStep("showing");
    const profilesFetched = profiles;
    profilesFetched.splice(avatar.index, 1);
    setProfiles(profilesFetched);
    database.ref("users/" + userId + "/profiles").set(profilesFetched);
  };

  const editingAvatarHandler = () => {
    setStep(step + "-choosing");
    setAvatar({ ...avatar, name: userNameRef.current.value });
  };

  return (
    <Container>
      <Title align="left">
        {step === "creating" ? "Add Profile" : "Editing Profile"}
      </Title>
      <Subtitle>Add a profile for another person watching Netflix.</Subtitle>
      <NewProfile>
        <ImgContainer color={avatar.color}>
          <Icon onClick={editingAvatarHandler}>
            <Create style={{ fontSize: "inherit" }} />
          </Icon>
          <Image
            src={avatar.avatar}
            alt="Profile Image"
            height="100"
            width="100"
          />
        </ImgContainer>
        <div>
          <Input
            small={true}
            defaultValue={avatar.name}
            error={errorName}
            ref={userNameRef}
            type="text"
            maxlength="50"
            minlength="5"
            placeholder="Name"
          />
          {errorName && <SignError>Please enter a name</SignError>}
        </div>
        <CheckKidsContainer>
          <p>Kid?</p>
          <CheckBox type="checkbox" />
        </CheckKidsContainer>
      </NewProfile>
      <ContainerBtns>
        <ProfilesBtn bgColor="#fff" onClick={creatingProfileHandler}>
          Continue
        </ProfilesBtn>
        <ProfilesBtn bgColor="transparent" onClick={() => setStep("showing")}>
          Cancel
        </ProfilesBtn>
        {step === "editing" && (
          <ProfilesBtn bgColor="transparent" onClick={() => deleteHandler()}>
            Delete Profile
          </ProfilesBtn>
        )}
      </ContainerBtns>
    </Container>
  );
}
