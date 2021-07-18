import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../store/user-context";

export const gettingProfiles = (userId) => {
  // const { setAvatar, profiles, setStep, setProfiles } = useContext(UserContext);
  const [profiles, setProfiles] = useState([]);
  console.log("reuning hook");
  const httpURL = `https://newflix-c6f11-default-rtdb.firebaseio.com/users/${userId}.json`;
  useEffect(() => {
    axios
      .get(httpURL)
      .then((res) => {
        setProfiles(res.data.profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  return profiles;
};
