import { useState, useEffect } from "react";
import axios from "axios";

// export const postingProfiles = (userId) => {
//   console.log("kkkk");
//   const [profiles, setProfiles] = useState([]);
//   console.log(profiles);
//   const httpURL = `https://newflix-c6f11-default-rtdb.firebaseio.com/go/${userId}.json`;
//   // useEffect(() => {
//   fetch
//     .post(httpURL, { userId: userId })
//     .then((res) => {
//       console.log(res);
//       setProfiles(res.data);
//     })
//     .catch((error) => console.log(error));
//   // }, []);
//   return profiles;
// };

// export const postingProfiles = (userId, Data) => {
//   const DUMMY_PROFILES = [
//     {
//       name: "luzda1",
//       avatar: "https://avatars.dicebear.com/api/avataaars/luzda1.svg",
//     },
//     {
//       name: "oddie1",
//       avatar: "https://avatars.dicebear.com/api/bottts/oddie1.svg",
//     },
//     {
//       name: "kira2",
//       avatar: "https://avatars.dicebear.com/api/micah/kira2.svg",
//     },
//     {
//       name: "kiara3",
//       avatar: "https://avatars.dicebear.com/api/gridy/kiara3.svg",
//     },
//   ];
//   database.ref("users/" + userId + "/profile").set(Data);
// };

export const gettingProfiles = (userId) => {
  const [profiles, setProfiles] = useState([]);
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
