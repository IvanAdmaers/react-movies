import React from "react";

const MovieInfo = ({ movieInfo }) => {
  return (
    <section
      className="section detail"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})` ||
          "",
      }}
    >
      <div className="detail-inner">
        <div className="detail__poster">
          <img
            src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
            alt=""
          />
        </div>
        <div className="detail-content">
          <h1 className="detail__title">{movieInfo.title || movieInfo.name}</h1>
          {movieInfo.genres.length > 0 ? (
            <div className="detail__list-genres">
              {movieInfo.genres.map((item) => (
                <p className="detail__list-genre" key={item.id}>
                  {" "}
                  {item.name}{" "}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
          {movieInfo.overview.length > 0 ? (
            <p className="detail__overview">Описание: {movieInfo.overview}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
