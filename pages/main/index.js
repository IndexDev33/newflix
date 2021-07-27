import React from "react";
import Carousel from "../../components/Carousel/Carousel";
export default function index() {
  return (
    <React.Fragment>
      <Carousel title="Popular on Newflix" media="movie" type="popular" />
      <Carousel title="Trending Now" media="tv" type="popular" />
    </React.Fragment>
  );
}
