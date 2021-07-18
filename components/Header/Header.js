import React from "react";
import styled from "styled-components";
import Lang from "./Lang";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 65px;
  width: 100%;
  background-color: transparent;
  max-width: 1920px;
  padding-top: 20px;
  transition: background-color 0.5s;
`;

const HeaderDiv = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0.5rem;
  height: auto;
  margin: 0 5%;
  gap: 0.7rem;
`;

const SingInBtn = styled.div`
  float: none;
  margin-top: 0;
  white-space: nowrap;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  background-color: #e50914;
  line-height: normal;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;
`;

export default function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <HeaderDiv>
        <Logo onClick={() => console.log(router)} />
        {pathname === "/" && <Lang />}
        {pathname === "/" && (
          <Link href="/signin">
            <SingInBtn onClick={() => console.log(pathname)}>Sign In</SingInBtn>
          </Link>
        )}
      </HeaderDiv>
    </HeaderContainer>
  );
}
