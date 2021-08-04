import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import MainContent from "../../components/MainContent/MainContent";

export default function index() {
  return (
    <React.Fragment>
      <MainContent media="movie" />
      <Carousel title="Popular on Newflix" media="movie" type="popular" />
      <Carousel title="Trending Now" media="tv" type="popular" />
    </React.Fragment>
  );
}
