import React, { useState, useEffect } from "react";
import Loading from ".//components/Loading";
import Movie from ".//components/Movie";
import MovieFav from ".//components/MovieFav";
import Header from ".//components/Header";
import SearchBar from ".//components/SearchBar";

const App = () => {
  const [movie, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watched") || "[]");
    setWatched(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  const gettingData = async () => {
    const API_KEY = `d0116670`;
    try {
      setIsLoading(true);
      const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
      const response = await fetch(URL);
      console.warn(response);
      const responseJson = await response.json();
      console.warn(responseJson.Search);
      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setIsLoading(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    gettingData(searchValue);
  }, [searchValue]);

  const addingWatched = (movie) => {
    setWatched([...watched, movie]);
  };

  const removeFav = (movie) => {
    const newFav = watched.filter((val) => val.imdbID !== movie.imdbID);
    setWatched(newFav);
  };

  return (
    <>
      <Header data={movie} watched={watched} />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      {isLoading ? (
        <Movie addingWatched={addingWatched} data={movie} />
      ) : (
        <Loading />
      )}
      <MovieFav removeFav={removeFav} data={watched} />
    </>
  );
};

export default App;
