import React, { useEffect, useState } from "react";

import axios from "axios";

import "./detail.scss";
import MovieInfo from "./MovieInfo";
import Person from "./Person";

const Detail = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieInfoPerson, setMovieInfoPerson] = useState(null);

  useEffect(() => {
    const getMovieInfo = async () => {
      const movieInfoRes = await axios.get(
        `https://api.themoviedb.org/3/${movieId[1]}/${movieId[0]}?api_key=190eda9df5172483ad9af3e885997915&language=ru`
      );
      const movieInfoPersonRes = await axios.get(
        `https://api.themoviedb.org/3/${movieId[1]}/${movieId[0]}/credits?api_key=190eda9df5172483ad9af3e885997915&language=ru-RU`
      );

      setMovieInfo(movieInfoRes.data);
      setMovieInfoPerson(movieInfoPersonRes.data);
    };
    getMovieInfo();
  }, []);

  return (
    <>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      {movieInfoPerson && (
        <Person
          movieInfoPerson={movieInfoPerson.cast}
          title={"Актёрский состав"}
        />
      )}
      {movieInfoPerson && (
        <Person
          movieInfoPerson={movieInfoPerson.crew}
          title={"Съёмочный состав"}
        />
      )}
    </>
  );
};

export default Detail;
