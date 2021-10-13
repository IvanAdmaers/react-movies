import React, { useState, useEffect } from "react";

import Slider from "../components/Slider/Slider";
import MovieList from "../components/Movie-list/MovieList";

import axios from "axios";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popularMoviesRes = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );
      const topRateMoviesdRes = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );
      const popularTvRes = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );
      const topRatedTvRes = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );

      setPopularMovies(popularMoviesRes.data);
      setTopRatedMovies(topRateMoviesdRes.data);
      setPopularTv(popularTvRes.data);
      setTopRatedTv(topRatedTvRes.data);
    };
    getMovies();
  }, []);

  return (
    <main className="main">
      <Slider />
      <MovieList moviesList={popularMovies} title={"Популярные фильмы"} />
      <MovieList moviesList={topRatedMovies} title={"Лучшие фильмы"} />
      <MovieList moviesList={popularTv} title={"Популярные сериалы"} />
      <MovieList moviesList={topRatedTv} title={"Лучшие сериалы"} />
    </main>
  );
};

export default Home;
