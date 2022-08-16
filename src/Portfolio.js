import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Portfolioalbum
 from "./components/Portfolioalbum";
function Portfolio(){
    return <div>
    
        <Header title=" My Portfolio"  /> 
        <Gallery/>
      {/* <Portfolioalbum/>   */}
    </div>
}

export default Portfolio;