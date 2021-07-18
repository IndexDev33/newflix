import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Lang from "../Header/Lang";
import CartContainer from "./CardContainer";
import { useRouter } from "next/router";

const FooterWrapper = styled.div`
  margin-top: 0;
  min-width: 190px;
  width: 100%;
  font-size: 1em;
  color: #757575;
  position: relative;
  display: flex;
  justify-content: center;
`;

const FotterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 950px) {
    flex-wrap: wrap;
    align-content: space-around;
  }
`;

const Title = styled.p`
  padding: 0;
  margin: 0 0 30px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 1100px;
  font-size: 13px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin-left: 0;
  width: 50%;
  padding: 0;
  margin-bottom: 16px;
  display: inline-block;
  list-style: none;
  min-width: 100px;
  padding-right: 12px;

  @media only screen and (min-width: 550px) {
    width: 33%;
    text-align: left;
  }

  @media only screen and (min-width: 950px) {
    width: 25%;
  }
`;

const FooterTextEnd = styled.p`
  font-size: 13px;
  margin-top: 24px;
`;

const FooterDataBig = [
  {
    name: "FAQ",
    url: "/",
  },
  {
    name: "Help Center",
    url: "/",
  },
  {
    name: "Account",
    url: "/",
  },
  {
    name: "Media Center",
    url: "/",
  },
  {
    name: "Investor Relations",
    url: "/",
  },
  {
    name: "Jobs",
    url: "/",
  },
  {
    name: "Redeem Gift Cards",
    url: "/",
  },
  {
    name: "Buy Gift Cards",
    url: "/",
  },
  {
    name: "Ways to Watch",
    url: "/",
  },
  {
    name: "Terms of Use",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/",
  },
  {
    name: "Cookie Preferences",
    url: "/",
  },
  {
    name: "Corporate Information",
    url: "/",
  },
  {
    name: "Contact Use",
    url: "/",
  },
  {
    name: "Speed Test",
    url: "/",
  },
  {
    name: "Legal Notices",
    url: "/",
  },
  {
    name: "Only on Netflix",
    url: "/",
  },
];

const FooterDataSmall = [
  {
    name: "FAQ",
    url: "/",
  },
  {
    name: "Help Center",
    url: "/",
  },
  {
    name: "Terms of Use",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/",
  },
  {
    name: "Cookie Preferences",
    url: "/",
  },
  {
    name: "Corporate Information",
    url: "/",
  },
];

export default function FooterCard() {
  const { pathname } = useRouter();
  const links = pathname === "/" ? FooterDataBig : FooterDataSmall;
  return (
    <CartContainer>
      <FooterWrapper>
        <FotterContainer>
          <Title>Questions? Call 01 800 917 1563</Title>
          <List>
            {links.map((link, i) => (
              <Link key={i} href={link.url}>
                <Item>{link.name}</Item>
              </Link>
            ))}
          </List>
          <Lang />
          <FooterTextEnd>
            {pathname === "/" && "Netflix Colombia"}
          </FooterTextEnd>
        </FotterContainer>
      </FooterWrapper>
    </CartContainer>
  );
}
