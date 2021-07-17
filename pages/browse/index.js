import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { useRouter } from "next/router";
import BrowseProfiles from "../../components/Browse/BrowseProfiles";
import EditingProfile from "../../components/Browse/EditingProfile";
import ChooseAvatar from "../../components/Browse/ChooseAvatar";
import UserContext from "../../store/user-context";

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function index() {
  console.log("Browse Page Rendered");
  const { userId } = useContext(SignContext);
  const { step } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    !userId && router.push("/signin");
  }, []);
  return (
    <Wrapper>
      {step === "showing" && <BrowseProfiles userId={userId} />}
      {step === "editing" && <EditingProfile userId={userId} />}
      {step === "creating" && <EditingProfile userId={userId} />}
      {step.split("-")[1] === "choosing" && <ChooseAvatar userId={userId} />}
    </Wrapper>
  );
}
