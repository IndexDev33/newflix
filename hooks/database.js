import { useState, useEffect } from "react";

import axios from "axios";

export const gettingProfiles = (userId) => {
  const [profiles, setProfiles] = useState([]);
  const httpURL = `https://newflix-c6f11-default-rtdb.firebaseio.com/test/${userId}.json`;
  useEffect(() => {
    axios
      .get(httpURL)
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return profiles;
};
