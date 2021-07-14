import React from "react";
import Cards from "../components/Cards/Cards";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  //TODO: Create page for sign in with default data - firebase
  return (
    <Container>
      <Cards />
    </Container>
  );
}
