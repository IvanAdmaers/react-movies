import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";

import { Switch, Route } from "react-router-dom";

function App() {
  const [movieId, setMovieId] = useState(
    JSON.parse(localStorage.getItem("movieId")) || []
  );

  const getId = (id, category) => {
    setMovieId([id, category]);

    localStorage.setItem("movieId", JSON.stringify([id, category]));
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/react-movies" exact>
          <Home getId={getId} />
        </Route>
        <Route path="/react-movies/detail/:id" exact>
          <Detail movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
