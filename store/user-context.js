import React, { useState } from "react";

const UserContext = React.createContext({
  profiles: [],
  setProfiles: () => {},
  avatar: [],
  setAvatar: () => {},
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

  const userContext = {
    profiles,
    setProfiles: (val) => setProfiles(val),
    avatar,
    setAvatar: (val) => setAvatar(val),
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
}
