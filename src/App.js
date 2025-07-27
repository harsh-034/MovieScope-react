import React from 'react'
import Home from "./MyComponent/Home";
import SingleMovie from './MyComponent/SingleMovie';
import Error from "./MyComponent/Error";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
      
      <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />}/>    {/* ye idpe jaye ga url ke  */}
        <Route path="*" element={<Error />} />   {/*this file create for error becuse clent visit not avvlebal page   */}
      </Routes>
      
      
      </>
    
  )
}

export default App
