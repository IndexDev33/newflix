import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SignContext from "../../store/signing-context";
import { gettingProfiles } from "../../hooks/database";
import { useRouter } from "next/router";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  background: #141414;
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
  gap: 3rem 1rem;
`;

const Profile = styled.li`
  cursor: pointer;
  /* margin: 0 2vw 0 0; */
  display: flex;

  flex-direction: column;
  position: relative;
  align-items: center;
  height: 90px;
  width: 90px;
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: red;
`;

const ProfileName = styled.p`
  font-size: 13px;
  color: grey;
  margin: 0.6em 0;
`;

const DUMMY_PROFILES = [
  {
    name: "luzda1",
    avatar: "https://avatars.dicebear.com/api/avataaars/luzda1.svg",
  },
  {
    name: "oddie1",
    avatar: "https://avatars.dicebear.com/api/bottts/oddie1.svg",
  },
  {
    name: "kira2",
    avatar: "https://avatars.dicebear.com/api/micah/kira2.svg",
  },
  {
    name: "kiara3",
    avatar: "https://avatars.dicebear.com/api/gridy/kiara3.svg",
  },
];

export default function index() {
  const { userId, logIn } = useContext(SignContext);
  const router = useRouter();
  // const profiles = gettingProfiles(userId);

  useEffect(() => {
    // !logIn && router.push("/signin");
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Who's watching?</Title>
        <Profiles>
          {DUMMY_PROFILES && DUMMY_PROFILES.length > 0 ? (
            DUMMY_PROFILES.map((profile, i) => (
              <Link key={i} href="/">
                <Profile>
                  <ProfileImage src={profile.avatar} />
                  <ProfileName>{profile.name}</ProfileName>
                </Profile>
              </Link>
            ))
          ) : (
            <div>No profiles</div>
          )}
          <Profile></Profile>
        </Profiles>
        <button>Manage Profiles</button>
      </Container>
    </Wrapper>
  );
}
