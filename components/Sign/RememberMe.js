import React from "react";
import styled from "styled-components";
import { CheckBox } from "../styles/basics";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

const LabelRemeberMe = styled.label`
  display: flex;
  align-items: center;
`;

export default function RememberMe({ onRemember }) {
  return (
    <Wrapper>
      <LabelRemeberMe htmlfor="rememberMe">
        <CheckBox
          bgColor="#fff"
          onClick={onRemember}
          type="checkbox"
          name="rememberMe"
          tabIndex="0"
          data-uia="rememberMe"
        />
        <span>Remember me</span>
      </LabelRemeberMe>
      <Link href="/help">Need help?</Link>
    </Wrapper>
  );
}
