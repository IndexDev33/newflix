import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { SignProvider } from "../../store/signing-context";
import { useRouter } from "next/router";

const LayoutWrapper = styled.div`
  background-color: ${(props) => (props.singup ? "#fff" : "#000")};
  color: ${(props) => (props.singup ? "#000" : "#fff")};
  min-height: 100vh;
`;

export default function Layout({ children }) {
  const { pathname } = useRouter();
  return (
    <SignProvider>
      <LayoutWrapper singup={pathname === "/signup"}>
        <Header />
        {children}
      </LayoutWrapper>
    </SignProvider>
  );
}
