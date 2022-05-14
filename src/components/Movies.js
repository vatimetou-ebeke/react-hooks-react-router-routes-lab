import React from "react";
import { movies } from "../data";

function Movies() {
const movieslist= movies.map((movie) =>(
  <div key ={movie.title}>
   
    title: {movie.title}
    time: {movie.time}
    <ul>
      genres: <li > {movie.genres}</li>
    </ul>
  </div>
  

))
  return <div>
    <h1>Movies Page</h1>
    {movieslist}
  </div>
  ;
}

export default Movies;
