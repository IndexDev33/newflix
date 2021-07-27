import React from "react";
import styled from "styled-components";
import {
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  PlayArrow,
  Add,
  ExpandMoreOutlined,
} from "@material-ui/icons";

const ControlsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonsItem = styled.div`
  display: flex;
  gap: 0.4rem;
  font-size: 1.5rem;
`;

const BtnContainer = styled.div`
  border: #fff 1px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    background-color: #fff;
    color: #000;
  }
`;

export default function Controls() {
  return (
    <ControlsDiv>
      <ButtonsItem>
        <BtnContainer>
          <PlayArrow style={{ fontSize: "inherit" }} />
        </BtnContainer>
        <BtnContainer>
          <Add style={{ fontSize: "inherit" }} />
        </BtnContainer>
        <BtnContainer>
          <ThumbUpAltOutlined style={{ fontSize: "inherit" }} />
        </BtnContainer>
        <BtnContainer>
          <ThumbDownOutlined style={{ fontSize: "inherit" }} />
        </BtnContainer>
      </ButtonsItem>
      <BtnContainer>
        <ExpandMoreOutlined style={{ fontSize: "inherit" }} />
      </BtnContainer>
    </ControlsDiv>
  );
}
