import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { SignProvider } from "../../store/signing-context";
import { useRouter } from "next/router";
import { UserProvider } from "../../store/user-context";

const LayoutWrapper = styled.div`
  background-color: ${(props) => (props.singup ? "#fff" : "#000")};
  color: ${(props) => (props.singup ? "#000" : "#fff")};
  min-height: 100vh;
`;

export default function Layout({ children }) {
  const { pathname } = useRouter();
  console.log("Layout Page Rendere");
  return (
    <SignProvider>
      <UserProvider>
        <LayoutWrapper singup={pathname === "/signup"}>
          <Header />
          {children}
        </LayoutWrapper>
      </UserProvider>
    </SignProvider>
  );
}
