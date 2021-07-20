import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ArrowForwardIos } from "@material-ui/icons";
import Image from "next/image";
import UserContext from "../../store/user-context";
import { ImgContainer } from "../styles/basics";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
  position: relative;
  align-items: flex-start;
`;

const Title = styled.h1`
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: 1.8rem;
`;

const CarouselDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 90vw;
  gap: 1rem;
  overflow: scroll;
  scroll-behavior: smooth;

  & * {
    height: 90px;
    width: 90px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 0;
  right: -10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.5);

  & * {
    opacity: 0;
  }
  ${CarouselContainer}:hover & * {
    opacity: 1;
  }
`;

const colors = [
  "#0e9630",
  "#0e9fed",
  "#043661",
  "#075038",
  "#0af07b",
  "#01042b",
  "#04b303",
  "#0b8506",
  "#051da8",
  "#0583bb",
  "#0721f2",
  "#007db0",
  "#0720cc",
  "#0e3064",
  "#0b850a",
];

export default function SmallCarousel({ type, length }) {
  const { setAvatar, avatar } = useContext(UserContext);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const renderContent = colors.slice(0, length);

  useEffect(() => {
    if (containerRef.current.scrollWidth < carouselRef.current.scrollWidth) {
      setShowRight(true);
    }
  }, []);

  const scrollHandler = (direction) => {
    const wContainer = containerRef.current.scrollWidth;
    const wCarousel = carouselRef.current.scrollWidth;
    const placeOnCarousel = carouselRef.current.scrollLeft;
    if (direction === "right") {
      if (wContainer + placeOnCarousel >= wCarousel) {
        carouselRef.current.scrollLeft = 0;
        setShowLeft(false);
      } else {
        carouselRef.current.scrollLeft = placeOnCarousel + wContainer;
        setShowLeft(true);
      }
    }
    if (direction === "left") {
      if (placeOnCarousel - wContainer <= 0) {
        carouselRef.current.scrollLeft = 0;
        setShowLeft(false);
      } else {
        carouselRef.current.scrollLeft = placeOnCarousel - wContainer;
        setShowLeft(true);
      }
    }
  };

  return (
    <CarouselContainer ref={containerRef}>
      <Title>{type.toUpperCase()}</Title>
      {showRight && (
        <Arrow onClick={() => scrollHandler("right")}>
          <ArrowForwardIos />
        </Arrow>
      )}

      {showLeft && (
        <Arrow
          style={{ left: "-10px", transform: "rotate(180deg)" }}
          onClick={() => scrollHandler("left")}
        >
          <ArrowForwardIos />
        </Arrow>
      )}

      <CarouselDiv ref={carouselRef}>
        {renderContent.map((color, i) => (
          <ImgContainer
            key={color}
            color={color}
            onClick={() =>
              setAvatar({
                avatar: `https://avatars.dicebear.com/api/${type}/${i}.svg`,
                color,
                index: avatar.index,
                name: avatar.name,
              })
            }
          >
            <Image
              src={`https://avatars.dicebear.com/api/${type}/${i}.svg`}
              alt="Profile Image"
              height="100"
              width="100"
            />
          </ImgContainer>
        ))}
      </CarouselDiv>
    </CarouselContainer>
  );
}
