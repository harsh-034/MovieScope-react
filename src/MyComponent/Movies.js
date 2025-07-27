// print hoga movie yaha se

import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from 'react-router-dom';


const Movies = () => {
  const { movie } = useGlobalContext(); //thish error movie thish are fethe of context file
  return (
    
    <section className="movie-page">
    <div className=" Contenar grid grid-4-col">
      {movie.map((curMovie) => {
        const {imdbID, Title, Poster} = curMovie;
  return   <NavLink to={`movie/${imdbID}`}>
    <div className="card">
      <div className= "card-info">
        <h2>{Title}</h2> {/* tital show hoga  */}     
       
        <img src={Poster}art={imdbID} srcset="" /> {/* picture shoow hoga  */}

      </div>
    </div>

  </NavLink>;

    })}
    
      </div>
       </section>
    
  );
};

export default Movies;
