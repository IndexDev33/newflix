import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { useRouter } from "next/router";
import BrowseProfiles from "../../components/Browse/BrowseProfiles";
import EditingProfile from "../../components/Browse/EditingProfile";
import ChooseAvatar from "../../components/Browse/ChooseAvatar";
import UserContext from "../../store/user-context";
import axios from "axios";

// const Wrapper = styled.div`
//   min-height: calc(100vh - 64px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export default function index() {
  console.log("Browse Page Rendered");
  const { userId } = useContext(SignContext);
  const { step, setProfiles } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    !userId && router.push("/signin");
    console.log("page");
    axios
      .get(
        `https://newflix-c6f11-default-rtdb.firebaseio.com/users/${userId}.json`
      )
      .then((res) => {
        setProfiles(res.data.profiles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      {step === "showing" && <BrowseProfiles />}
      {step === "editing" && <EditingProfile userId={userId} />}
      {step === "creating" && <EditingProfile userId={userId} />}
      {step.split("-")[1] === "choosing" && <ChooseAvatar userId={userId} />}
    </React.Fragment>
  );
}
