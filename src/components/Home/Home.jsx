import React from "react";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Trusted from "../Trusted";
import FeatureProducts from "../../FeatureProducts";

const Home = () => {
  const name = "Yogi Store"
   

  return( 

    <>
  <HeroSection name ={name}/>
  <FeatureProducts/>
  <Services/>
  <Trusted />
  

  </> 
  )

};



export default Home;
