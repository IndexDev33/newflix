import React, { useState } from "react";

const UserContext = React.createContext({
  userId: "",
  setUserId: () => {},
  profiles: [],
  setProfiles: () => {},
});

export default UserContext;

export function UserProvider(props) {
  const [userId, setUserId] = useState("");
  const [profiles, setProfiles] = useState([]);

  const userContext = {
    userId,
    setEmail: (val) => setUserId(val),
    profiles,
    setProfiles: (val) => setProfiles(val),
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
}
