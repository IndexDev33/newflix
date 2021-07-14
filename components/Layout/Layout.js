import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
