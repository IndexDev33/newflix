import React, { useState } from "react";

const UserContext = React.createContext({
  profiles: [],
  setProfiles: () => {},
  avatar: [],
  setAvatar: () => {},
  step: "",
  setStep: () => {},
});

export default UserContext;

export function UserProvider(props) {
  const [profiles, setProfiles] = useState([]);
  const [avatar, setAvatar] = useState({
    avatar: "https://avatars.dicebear.com/api/bottts/377.svg",
    color: `green`,
    name: "",
    index: "",
  });
  const [step, setStep] = useState("showing");

  const userContext = {
    profiles,
    setProfiles: (val) => setProfiles(val),
    avatar,
    setAvatar: (val) => setAvatar(val),
    step,
    setStep: (val) => setStep(val),
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
}
