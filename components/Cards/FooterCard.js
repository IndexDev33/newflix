import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Lang from "../Header/Lang";
import CardWrapper from "./CardWrapper";
import { useRouter } from "next/router";

const FotterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color: grey;
  padding: 0 5%;
  gap: 1rem;

  @media only screen and (min-width: 950px) {
    flex-wrap: wrap;
    align-content: space-around;
  }
`;

const Title = styled.p`
  margin: 0 0 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  max-width: 1100px;
  font-size: 13px;
`;

const Item = styled.li`
  margin-bottom: 16px;
  width: 50%;
  list-style: none;
  min-width: 100px;

  @media only screen and (min-width: 550px) {
    width: 33%;
  }

  @media only screen and (min-width: 950px) {
    width: 25%;
  }
`;

const FooterTextEnd = styled.p`
  font-size: 13px;
`;

const FooterDataBig = [
  {
    name: "FAQ",
    url: "https://help.netflix.com/en/node/412",
  },
  {
    name: "Help Center",
    url: "https://help.netflix.com/en/",
  },
  {
    name: "Account",
    url: "https://www.netflix.com/youraccount",
  },
  {
    name: "Media Center",
    url: "https://media.netflix.com/",
  },
  {
    name: "Investor Relations",
    url: "http://ir.netflix.com/",
  },
  {
    name: "Jobs",
    url: "https://jobs.netflix.com/jobs",
  },
  {
    name: "Redeem Gift Cards",
    url: "https://www.netflix.com/redeem",
  },
  {
    name: "Buy Gift Cards",
    url: "https://www.netflix.com/gift-cards",
  },
  {
    name: "Ways to Watch",
    url: "https://www.netflix.com/watch",
  },
  {
    name: "Terms of Use",
    url: "https://help.netflix.com/legal/termsofuse",
  },
  {
    name: "Privacy",
    url: "https://help.netflix.com/legal/privacy",
  },
  {
    name: "Cookie Preferences",
    url: "https://www.netflix.com/co-en/#",
  },
  {
    name: "Corporate Information",
    url: "https://help.netflix.com/legal/corpinfo",
  },
  {
    name: "Contact Use",
    url: "https://help.netflix.com/contactus",
  },
  {
    name: "Speed Test",
    url: "https://fast.com/",
  },
  {
    name: "Legal Notices",
    url: "https://help.netflix.com/legal/notices",
  },
  {
    name: "Only on Netflix",
    url: "https://www.netflix.com/co-en/browse/genre/839338",
  },
];

const FooterDataSmall = [
  {
    name: "FAQ",
    url: "https://help.netflix.com/en/node/412",
  },
  {
    name: "Help Center",
    url: "https://help.netflix.com/en/",
  },
  {
    name: "Terms of Use",
    url: "https://help.netflix.com/legal/termsofuse",
  },
  {
    name: "Privacy",
    url: "https://help.netflix.com/legal/privacy",
  },
  {
    name: "Cookie Preferences",
    url: "https://www.netflix.com/co-en/#",
  },
  {
    name: "Corporate Information",
    url: "https://help.netflix.com/legal/corpinfo",
  },
];

export default function FooterCard() {
  const { pathname } = useRouter();
  const links = pathname === "/" ? FooterDataBig : FooterDataSmall;
  return (
    <CardWrapper>
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
        {pathname === "/" && <FooterTextEnd>IndexDev</FooterTextEnd>}
      </FotterContainer>
    </CardWrapper>
  );
}
