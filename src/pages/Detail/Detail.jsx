import React, { useEffect, useState } from "react";

import axios from "axios";

import "./detail.scss";

const Detail = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const getMovieInfo = async () => {
      const movieInfoRes = await axios.get(
        `https://api.themoviedb.org/3/${movieId[1]}/${movieId[0]}?api_key=190eda9df5172483ad9af3e885997915&language=ru`
      );

      setMovieInfo(movieInfoRes.data);
    };
    getMovieInfo();
  }, []);

  return (
    <>
      {movieInfo && (
        <div
          className="detail"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
          }}
        >
        </div>
      )}
    </>
  );
};

export default Detail;
