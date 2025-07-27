import React from 'react'
import { useParams } from 'react-router-dom';

const SingleMove = () => {
   const { id } = useParams();  
  return (
    <>
    <div>Our Single Movie {id}</div>  {/* thish id created becouse ther id search id then api throw ther are show the image  */} 
   
    </>
  );
}

export default SingleMove
