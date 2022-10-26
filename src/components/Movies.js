import React from "react";
import { movies } from "../data";

function Movies() {

  return <>
    <h1>Movies Page</h1>
    {movies.map(movie =>{
      return (
        <div>
          <ul>Name: {movie.title}</ul>
          <ul>Time: {movie.time}</ul>
          <ul>Genres: 
            {movie.genres.map(genre=>{
              return (<li>{genre}</li>)
            })}
          </ul>
        </div>
        )
    })}
  </>;
}

export default Movies;
