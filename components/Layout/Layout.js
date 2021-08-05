import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { SignProvider } from "../../store/signing-context";
import { useRouter } from "next/router";
import { UserProvider } from "../../store/user-context";

const LayoutWrapper = styled.div`
  background-color: ${(props) => (props.singup ? "#fff" : "#141414")};
  color: ${(props) => (props.singup ? "#000" : "#fff")};
`;

export default function Layout({ children }) {
  console.log("Layout Page Rendered");
  const { pathname } = useRouter();
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
