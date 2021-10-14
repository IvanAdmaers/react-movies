import React, { useEffect, useState } from "react";

import Modal from "../Modal/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./slider.scss";

const Slider = () => {
  const [sliderItems, setSliderItems] = useState(null);
  const [active, setActive] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);

  useEffect(() => {
    const getSliderItems = async () => {
      const getSliderItemsImg = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );

      setSliderItems(getSliderItemsImg.data.results.slice(0, 5));
    };

    getSliderItems();
  }, []);

  const openModal = async (id) => {
    setActive(true);

    const movieTrailerRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=190eda9df5172483ad9af3e885997915&language=ru&append_to_response=videos,images`
    );
    setMovieTrailer(movieTrailerRes.data);
  };

  return (
    <>
      <div className="slider">
        <Swiper grabCursor={true} spaceBetween={0} slidesPerView={1}>
          {sliderItems && (
            <>
              {sliderItems.map((sliderItem) => (
                <SwiperSlide key={sliderItem.id}>
                  <div
                    className="slider__item"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${sliderItem.backdrop_path})`,
                    }}
                  >
                    <div className="slider__item-content">
                      <h1 className="slider__item-title">
                        {sliderItem.title +
                          " (" +
                          sliderItem.release_date.slice(0, 4) +
                          ")"}
                      </h1>
                      <p className="slider__item-desc">{sliderItem.overview}</p>
                      <button
                        onClick={() => openModal(sliderItem.id)}
                        className="slider__item-button"
                      >
                        <svg
                          width="25"
                          height="30"
                          viewBox="0 0 25 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.1563 13.4273L23.6837 12.5777L23.1588 13.4289C24.2806 14.1206 24.2806 15.8722 23.1576 16.5669L23.1565 16.5676L3.5131 28.7546L3.51172 28.7555C2.47462 29.4012 1 28.6758 1 27.1845V2.80465C1 1.95276 1.40383 1.44202 1.88393 1.19172C2.39959 0.922881 3.03227 0.936355 3.51292 1.23446C3.51298 1.23449 3.51304 1.23453 3.5131 1.23457L23.1563 13.4273Z"
                            stroke="black"
                            strokeWidth="2"
                          />
                        </svg>
                        Трейлер
                      </button>
                    </div>
                    <img
                      className="slider__item-poster"
                      src={`https://image.tmdb.org/t/p/w300/${sliderItem.poster_path}`}
                      alt={sliderItem.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
        <Modal closeModal={() => setActive(false)} active={active}>
          {movieTrailer && (
            <>
              <iframe
                width="100%"
                height="300px"
                src={`https://www.youtube.com/embed/${movieTrailer.videos.results[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Slider;
