import React from "react";
import { actors } from "../data";

const actorslist= actors.map((actor) =>(
  <div key ={actor.name}>
   
    name : {actor.name}
    <ul>
    movies :<li > {actor.movies}</li>
    </ul>
  </div>
  

))

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actorslist}
  </div>;
}

export default Actors;
