import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Lang from "../Header/Lang";

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

export default function FooterCard({ links }) {
  return (
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
        <FooterTextEnd>Netflix Colombia</FooterTextEnd>
      </FotterContainer>
    </FooterWrapper>
  );
}
