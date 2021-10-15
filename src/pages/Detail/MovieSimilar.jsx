import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";

const MovieSimilar = ({ movieSimilar, getId, category }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      {movieSimilar.length > 0 ? (
        <section className="section similar">
          <Swiper grabCursor={true} spaceBetween={0} slidesPerView={"auto"}>
            {movieSimilar.map((similar) => (
              <SwiperSlide
                key={similar.id}
                onClick={() => getId(similar.id, category)}
              >
                <Link to={`/detail/${similar.id}`}>
                  <div className="similar__item">
                    <div className="similar__item-img">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${similar.poster_path}`}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default MovieSimilar;