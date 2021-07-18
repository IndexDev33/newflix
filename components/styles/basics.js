import styled from "styled-components";

export const CkeckBox = styled.input`
  position: relative;
  background-color: ${(props) => props.bgColor};
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid rgba(255, 255, 255, 0.3) 1px;
  overflow: hidden;

  &:checked:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    width: 90%;
    height: 90%;
    background-color: ${(props) => (props.bgColor ? "grey" : "#000")};
    clip-path: polygon(34% 60%, 86% 7%, 99% 24%, 31% 92%, 0 50%, 15% 34%);
  }
`;
