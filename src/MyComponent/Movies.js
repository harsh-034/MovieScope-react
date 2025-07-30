// print hoga movie yaha se

import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from 'react-router-dom';



const Movies = () => {
  const { movie, isLoding } = useGlobalContext(); //thish error movie thish are fethe of context file
  //  if (isLoding) {
  //   return (
  //     <div className=" ">
  //       <div className="loading">Loading....</div>;
  //     </div>
  //   );
  // }
  if (isLoding) {
  return (
    <div className="loading-wrapper">
      <div className="circular-loader"></div>
    </div>
  );
}
  return (
    <>
    <section className="movie-page">
    <div className=" Contenar grid grid-4-col">
      {movie.map((curMovie) => {
        const {imdbID, Title, Poster} = curMovie;
        const SizeOf_tital = Title.substring(0, 15);// not give more titale name fetch'


  return  (
     <NavLink to={`movie/${imdbID}`} key ={imdbID}>
    <div className="card">
      <div className= "card-info">
        <h2>
          {SizeOf_tital.length >= 15 ? `${SizeOf_tital} ...` : SizeOf_tital}  
          </h2> {/* tital show hoga  */}     
       
        <img src={Poster}art={imdbID}  /> {/* picture shoow hoga  */}

      </div>
    </div>

  </NavLink>
  );
    })}
   
      </div>
       </section>
    </>
  );
};

export default Movies;
