import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { requestMedia } from "../../hooks/tmdb-request";
import Controls from "./Controls";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.div`
  margin-top: -4rem;
  position: relative;
  .swiper-container:hover .swiper-pagination-bullets,
  .swiper-container:hover .swiper-button-next,
  .swiper-container:hover .swiper-button-prev {
    opacity: 1;
  }

  .swiper-wrapper {
    padding: 10% 0;
    /* background-color: blueviolet; */
  }

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
`;

const Title = styled.h2`
  margin: 0 0 0 0;
  padding: 0;
  position: absolute;
  top: 16%;
`;

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transform-origin: center 125%;
  transition: 1s;

  &:hover {
    transform: scale(1.3);
    z-index: 10;
    padding: 0 5%;
  }
`;

const CardMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000; */
`;

const DetailsCard = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  /* max-width: 250px; */
  background-color: #000;
  padding: 0.5rem;
  font-size: 10px;
  border-radius: 0 0 5px 5px;
  opacity: 0;
  transform: translateY(99%) translateX(-50%);
  transition: 1s;
  left: 50%;

  ${ContainerCard}:hover & {
    width: 90%;
    opacity: 1;
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
`;

//TODO: Missed video functionality
export default function Carousel({ media, type, title }) {
  const mediaRequested = requestMedia(media, type)
    ? requestMedia(media, type)
    : [];
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        slidesPerGroup={4}
        pagination={{ clickable: true }}
        loop={true}
        navigation
      >
        {mediaRequested.map((media, i) => (
          <SwiperSlide className="item" key={i}>
            <ContainerCard>
              <CardMedia>
                {/* <Image
                  src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
                  width="250"
                  height="140"
                /> */}
                <VideoPlayer
                  poster={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
                  src={``}
                  // width="250"
                  // height="140"
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
