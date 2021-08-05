import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { requestMedia } from "../../hooks/tmdb-request";
import Controls from "./Controls";
import axios from "axios";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.div`
  padding: 0.5rem;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    opacity: 0;
  }

  .swiper-pagination-bullets {
    top: 19%;
    left: unset;
    height: 25px;
    right: 2%;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    z-index: 1;
  }

  .swiper-pagination-bullets .swiper-pagination-bullet {
    height: 4px;
    border-radius: unset;
    width: 15px;
    margin: 0 1px;
    padding: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: white;
  }

  @media (min-width: 768px) {
    margin-top: -6rem;
    .swiper-container:hover .swiper-pagination-bullets,
    .swiper-container:hover .swiper-button-next,
    .swiper-container:hover .swiper-button-prev {
      opacity: 1;
    }

    .swiper-wrapper {
      padding: 10% 2rem;
    }
    .swiper-pagination-bullets {
      top: 25%;
    }
  }
  @media (min-width: 992px) {
    margin-top: -12rem;
  }
`;

const Title = styled.h2`
  padding: 0;
  top: 16%;
  font-size: 16px;

  @media (min-width: 768px) {
    margin: 0 0 0 3rem;
    position: absolute;
    font-size: 1.4rem;
  }
  @media (min-width: 992px) {
    top: 20%;
  }
  @media (min-width: 1200px) {
    top: 20%;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transform-origin: center 125%;
  transition: 1s;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.3);
      z-index: 10;
      padding: 0 5%;
    }
  }
`;

const CardMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 5px;
`;

const DetailsCard = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  background-color: #141414;
  padding: 0.5rem;
  font-size: 10px;
  border-radius: 0 0 5px 5px;
  opacity: 0;
  transform: translateY(96%) translateX(-50%);
  transition: 1s;
  left: 50%;
  box-shadow: 0px 5px 5px #000;

  ${ContainerCard}:hover & {
    width: 90%;
    opacity: 1;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const TextDetails = styled.div`
  display: flex;
  font-size: 10px;
  gap: 10px;
  align-items: center;
`;

const PopularityDiv = styled.div`
  color: #32bf56;
  font-weight: 600;
`;

const LangDiv = styled.div`
  border: 0.5px solid #fff;
  padding: 1px 5px;
`;

const GenresDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const VideoPlayer = styled.video`
  width: 100%;
  border-radius: 5px;
`;

const ShowImg = styled.div`
  height: 100%;
  background-color: red;
`;

//TODO: Missed video functionality
export default function Carousel({ media, type, title }) {
  const [mediaRequested, setMediaRequested] = useState([]);
  const [widthWindow, setWidthWindow] = useState(3);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${type}?api_key=bea4ebbef69e66a23c82731830f5a362&language=en-US&page=2`
      )
      .then((res) => {
        setMediaRequested(res.data.results);
      });

    function handleResize() {
      setWidthWindow(
        window.innerWidth < 768
          ? 3
          : window.innerWidth < 992
          ? 4
          : window.innerWidth < 1200
          ? 5
          : window.innerWidth < 1450
          ? 6
          : 6
      );
    }
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={10}
        slidesPerView={widthWindow}
        slidesPerGroup={widthWindow}
        pagination={{ clickable: true }}
        loop={true}
        navigation
      >
        {mediaRequested.map((media, i) => (
          <SwiperSlide className="item" key={i}>
            <ContainerCard>
              <CardMedia>
                <ShowImg />
                <VideoPlayer
                  poster={`https://image.tmdb.org/t/p/w500${
                    widthWindow > 3 ? media.backdrop_path : media.poster_path
                  }`}
                  src={``}
                />
              </CardMedia>
              <DetailsCard>
                <Controls />
                <TextDetails>
                  <PopularityDiv>{media.vote_average}</PopularityDiv>
                  <LangDiv>{media.original_language}</LangDiv>
                  <div>{media.popularity}</div>
                </TextDetails>
                <GenresDiv>
                  {media.genre_ids.map((genre) => (
                    <div key={genre}>{genre}</div>
                  ))}
                </GenresDiv>
              </DetailsCard>
            </ContainerCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
