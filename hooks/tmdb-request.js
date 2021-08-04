import React, { useEffect, useState } from "react";
import axios from "axios";

export const requestMedia = (media, type) => {
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${type}?api_key=bea4ebbef69e66a23c82731830f5a362&language=en-US&page=2`
      )
      .then((res) => {
        setPosters(res.data.results);
      });
  }, []);
  return posters;
};

export const requestLatest = (media) => {
  const [mediaRq, setMediaRq] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/popular?api_key=bea4ebbef69e66a23c82731830f5a362`
      )
      .then((res) => {
        setMediaRq(res.data.results[3]);
      });
  }, []);
  return mediaRq;
};
