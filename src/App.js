import React from 'react'
import Home from "./MyComponent/Home";
import SingleMovie from './MyComponent/SingleMovie'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />}/>  
         
      </Routes>
      
      </BrowserRouter>
      </>
    
  )
}

export default App
