import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useGlobalContext } from './Context';




const Home = () => {
  //this is context hook
  // const name = useContext(AppContext);// there are use for hook get al deta in name virabale and proide from Context file 
const name = useGlobalContext();
  return (
  <>
  <div>My Home Page </div>
  <p>{name}</p>   {/* thet are use for print frome context */}
  </>
  )
}

export default Home
//npm i react-router-dom  this is install link of  a remote for react
    