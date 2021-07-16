import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { gettingProfiles } from "../../hooks/database";
import { useRouter } from "next/router";
import BrowseProfiles from "../../components/Browse/BrowseProfiles";
import AddProfile from "../../components/Browse/AddProfile";
import ChooseAvatar from "../../components/Browse/ChooseAvatar";

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function index() {
  console.log("Browse Page Rendered");
  const { userId, logIn, setProfiles } = useContext(SignContext);
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [choosing, setChoosing] = useState(false);
  const [avatar, setAvatar] = useState({});

  const profiles = gettingProfiles(userId);
  // console.log(profiles, userId);

  return (
    <Wrapper>
      {!creating && !choosing && (
        <BrowseProfiles
          onCreating={() => setCreating((prev) => !prev)}
          userId={userId}
          profiles={profiles}
          onChooseAvatar={(val) => setAvatar(val)}
        />
      )}
      {creating && !choosing && (
        <AddProfile
          onChoosing={(val) => setChoosing(val)}
          onCreating={() => setCreating((prev) => !prev)}
          avatar={avatar}
          // onNotChoosing={() => setChoosing(false)}
        />
      )}
      {choosing && (
        <ChooseAvatar
          onChoosing={(val) => setChoosing(val)}
          onChooseAvatar={(val) => setAvatar(val)}
          avatar={avatar}
          // onNotChoosing={() => setChoosing(false)}
        />
      )}
    </Wrapper>
  );
}
