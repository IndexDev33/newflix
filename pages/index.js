import React, { useContext, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import SignContext from "../store/signing-context";
import { auth, provider } from "../components/firebase/firebase";
import { useRouter } from "next/router";
import { gettingProfiles } from "../hooks/database";

export default function Home() {
  const { toggleLogIn } = useContext(SignContext);
  const router = useRouter();
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("email") &&
  //     localStorage.getItem("password") &&
  //     localStorage.getItem("userId")
  //   ) {
  //     const [emailStorage, passwordStorage, userIdStorage] = [
  //       localStorage.getItem("email"),
  //       localStorage.getItem("password"),
  //       localStorage.getItem("userId"),
  //     ];
  //     auth
  //       .signInWithEmailAndPassword(emailStorage, passwordStorage)
  //       .then((user) => {
  //         console.log(user);
  //         router.push("/browse");
  //         toggleLogIn(true);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         toggleLogIn(false);
  //       });
  //   }
  // }, []);

  // }
  //TODO: Read local store data and login with those
  //TODO: remove border bottom input on quewstion
  return (
    <React.Fragment>
      <Cards />
    </React.Fragment>
  );
}
