import React from "react";
import styled from "styled-components";
import { requestLatest } from "../../hooks/tmdb-request";
import Btn from "./Btn";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(rgba(255, 255, 255, 0) 60%, #1d1d1d),
    url(${(props) => props.poster});
  background-position: center;
  background-size: cover;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  color: #fff;
  margin-bottom: 2vw;

  @media (min-width: 768px) {
    background: linear-gradient(rgba(255, 255, 255, 0) 60%, #1d1d1d),
      url(${(props) => props.backdrop});
    background-position: center;
    background-size: cover;
    justify-content: flex-start;
    margin-bottom: -12vw;
  }
  @media (min-width: 992px) {
    height: 90vh;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Genres = styled.div`
  position: relative;
  text-align: center;
  font-size: 0.7rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 2vw;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DetailsWide = styled.div`
  display: none;
  padding-left: 2vw;
  height: 55%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Overview = styled.div`
  width: 50%;

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

const BtnsContainerWide = styled.div`
  display: flex;
  gap: 2vw;
`;

const BtnWide = styled.button`
  width: 170px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }
`;

export default function MainContent({ media }) {
  const { genres, backdrop_path, poster_path, original_title, overview } =
    requestLatest(media) ? requestLatest(media) : {};

  const imgBackdrop = backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
    : `https://static.coindesk.com/wp-content/uploads/2020/12/axie-infinity-1200x628.jpg`;
  const imgPoster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://publish.one37pm.net/wp-content/uploads/2021/03/latest-mobile.jpg`;

  return (
    <Container poster={imgPoster} backdrop={imgBackdrop}>
      <Details>
        <Genres>{genres}</Genres>
        <BtnContainer>
          <Btn btnType="add" />
          <Btn btnType="play" />
          <Btn btnType="info" />
        </BtnContainer>
      </Details>
      <DetailsWide>
        <Overview>{overview}</Overview>
        <BtnsContainerWide>
          <BtnWide onClick={() => console.log("play")}>
            <PlayArrow />
            Play
          </BtnWide>
          <BtnWide onClick={() => console.log(original_title)}>
            <InfoOutlined />
            More Info
          </BtnWide>
        </BtnsContainerWide>
      </DetailsWide>
    </Container>
  );
}
