import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { gettingProfiles } from "../../hooks/database";
import { useRouter } from "next/router";
import BrowseProfiles from "../../components/Browse/BrowseProfiles";
import AddProfile from "../../components/Browse/AddProfile";
import ChooseAvatar from "../../components/Browse/ChooseAvatar";
import UserContext from "../../store/user-context";
import axios from "axios";

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function index() {
  console.log("Browse Page Rendered");
  const { userId } = useContext(SignContext);
  const { setProfiles } = useContext(UserContext);
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [choosing, setChoosing] = useState(false);
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    const httpURL = `https://newflix-c6f11-default-rtdb.firebaseio.com/users/${userId}.json`;
    // const httpURL = `https://newflix-c6f11-default-rtdb.firebaseio.com/users/GMJ6xuYPbNRV9F95M6eycUFRfNy1.json`;
    axios
      .get(httpURL)
      .then((res) => {
        setProfiles(res.data.profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      {!creating && !choosing && (
        <BrowseProfiles onCreating={() => setCreating((prev) => !prev)} />
      )}
      {creating && !choosing && (
        <AddProfile
          onChoosing={(val) => setChoosing(val)}
          onCreating={() => setCreating((prev) => !prev)}
          userId={userId}
        />
      )}
      {choosing && (
        <ChooseAvatar
          onChoosing={(val) => setChoosing(val)}
          onChooseAvatar={(val) => setAvatar(val)}
        />
      )}
    </Wrapper>
  );
}
