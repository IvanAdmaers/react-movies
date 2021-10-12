import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./slider.scss";

const Slider = () => {
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    const getSliderItems = async () => {
      const getSliderItemsImg = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=190eda9df5172483ad9af3e885997915&language=ru&page=1"
      );

      setSliderItems(getSliderItemsImg.data.results.slice(0, 5));
    };

    getSliderItems();
  }, []);

  return (
    <section className="section">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
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
                <button className="slider__item-button">Трейлер</button>
              </div>
              <img
                className="slider__item-poster"
                src={`https://image.tmdb.org/t/p/w300/${sliderItem.poster_path}`}
                alt={sliderItem.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
