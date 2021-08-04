import React from "react";
import styled from "styled-components";

//Material UI
import {
  PlayArrow,
  Add,
  ClearOutlined,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  InfoOutlined,
} from "@material-ui/icons";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  background-color: transparent;
  position: relative;
  width: 100px;

  &:first-child {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    flex-direction: row;
    height: 50%;
    border-radius: 5px;
    padding-right: 10px;
  }
`;

const BtnText = styled.p`
  width: 100%;
`;

const Info = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  ${Button}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const btnsList = [
  {
    name: "play",
    class: "btnPlay",
    hover: "Play",
    text: "Play",
    icon: "PlayArrowIcon",
  },
  {
    name: "add",
    class: "addList",
    hover: "Add to my list",
    text: "My List",
    icon: "AddIcon",
  },
  {
    name: "remove",
    class: "removeList",
    hover: "Remove from my list",
    text: "",
    icon: "ClearOutlinedIcon",
  },
  {
    name: "like",
    class: "likeIt",
    hover: "I like this",
    text: "",
    icon: "ThumbUpAltOutlinedIcon",
  },
  {
    name: "dislike",
    class: "dislikeIt",
    hover: "Not for me",
    text: "",
    icon: "ThumbDownAltOutlinedIcon",
  },
  {
    name: "info",
    class: "info",
    hover: "More info",
    text: "Info",
    icon: "InfoOutlinedIcon",
  },
];

export default function Btn(props) {
  const indexBtn = props.btnType
    ? btnsList.findIndex((b) => b.name === props.btnType)
    : 1;
  const clickHandler = () => {
    console.log(btnsList[indexBtn].name);
  };

  //TODO: ver como unificar esta logica
  return (
    <Button className={btnsList[indexBtn].class} onClick={clickHandler}>
      <Info>{btnsList[indexBtn].hover}</Info>
      {btnsList[indexBtn].name === "play" && <PlayArrow />}
      {btnsList[indexBtn].name === "add" && <Add />}
      {btnsList[indexBtn].name === "remove" && <ClearOutlined />}
      {btnsList[indexBtn].name === "like" && <ThumbUpAltOutlined />}
      {btnsList[indexBtn].name === "dislike" && <ThumbDownAltOutlined />}
      {btnsList[indexBtn].name === "info" && <InfoOutlined />}
      <BtnText>{btnsList[indexBtn].text}</BtnText>
    </Button>
  );
}
