import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Link from "next/link";
import { gettingProfiles } from "../../hooks/database";
import CreateIcon from "@material-ui/icons/Create";
import UserContext from "../../store/user-context";
import { database } from "../firebase/firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: unset;
  text-align: center;
  margin: 0;
  @media only screen and (min-width: 650px) {
    text-align: left;
  }
`;

const Subtitle = styled.h4`
  margin: 0;
  font-weight: unset;
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

  @media only screen and (min-width: 650px) {
    flex-direction: row;
    border-top: solid rgba(255, 255, 255, 0.5) 1px;
    border-bottom: solid rgba(255, 255, 255, 0.5) 1px;
    padding: 1rem 0;
  }
`;

const ImgContainer = styled.div`
  height: 24vw;
  width: 24vw;
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;
const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.3);
  height: 2rem;
  border: none;
  outline: ${(props) => (props.errorName ? "solid 2px red" : "none")};
  color: #fff;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
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

const CheckKids = styled.input`
  position: relative;
  background-color: transparent;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: solid rgba(255, 255, 255, 0.3) 1px;
  &:checked:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    width: 90%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.5);
    clip-path: polygon(34% 60%, 86% 7%, 99% 24%, 31% 92%, 0 50%, 15% 34%);
  }
`;

const ContainerBtns = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfilesBtn = styled.button`
  display: block;
  margin: 4em 0 1em 0;
  border: 1px solid grey;
  color: #fff;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: red;
  font-weight: 600;

  &:nth-child(2) {
    color: grey;
    background-color: transparent;
  }
`;

const SignError = styled.div`
  color: red;
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
`;

export default function AddProfile({ onChoosing, onCreating, userId }) {
  const { avatar, profiles, setAvatar, setProfiles } = useContext(UserContext);
  const [errorName, setErrorName] = useState(false);
  const userNameRef = useRef(null);
  const continuekHandler = () => {
    if (userNameRef.current.value.length > 0) {
      onCreating();
      setErrorName(false);
      const profilesFetched = profiles;
      const avatarFetched = avatar;
      avatarFetched.name = userNameRef.current.value;
      profilesFetched[avatar.index] = avatarFetched;
      // setProfiles(profilesFetched);
      database.ref("users/" + userId + "/profiles").set(profilesFetched);
    } else {
      setErrorName(true);
    }
  };

  const editClickHandler = () => {
    onChoosing(true);
    setAvatar({ ...avatar, name: userNameRef.current.value });
  };

  return (
    <Container>
      <Title>Add Profile</Title>
      <Subtitle>Add a profile for another person watching Netflix.</Subtitle>
      <NewProfile>
        <ImgContainer onClick={() => console.log(avatar)} color={avatar.color}>
          <Icon onClick={editClickHandler}>
            <CreateIcon style={{ fontSize: "inherit" }} />
          </Icon>
          <ProfileImage src={avatar.avatar} />
        </ImgContainer>
        <div>
          <Input
            defaultValue={avatar.name}
            errorName={errorName}
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
          <CheckKids type="checkbox" />
        </CheckKidsContainer>
      </NewProfile>
      <ContainerBtns>
        <ProfilesBtn onClick={continuekHandler}>Continue</ProfilesBtn>
        <ProfilesBtn onClick={() => onCreating()}>Cancel</ProfilesBtn>
      </ContainerBtns>
    </Container>
  );
}
