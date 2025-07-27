import React from 'react'
import { useGlobalContext } from './Context'

const Movies = () => {
  const {movie}= useGlobalContext();   //thish error movie thish are fethe of context file 
  return (
   <>
   {movie.map((curMovie) => {
    return (
      <div>
        <h2>{curMovie.Title}</h2>
      </div>
    );
   })} 
   </>
  );
};

export default Movies
