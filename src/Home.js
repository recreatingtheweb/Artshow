import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function Home(){
    return <div >
        {/* <Header title="Welcome to my mock photography display!"/> */}
        <div className="call-to-action">
        <h1 style = {{  marginBottom : 40 }}> Mock Portfolio</h1>
        <Link to="/portfolio" style = {{  marginRight : 15 }} class="btn btn-lg btn-secondary fw-bold border-white bg-dark"><i class="fa-solid fa-circle-arrow-right"></i> Portfolio</Link>
        <Link to="/contact" style = {{  marginLeft : 15 }} class="btn btn-lg btn-secondary fw-bold border-white bg-dark" ><i class="fa-solid fa-book-open"></i> Contact </Link>
        </div>

        

        
    </div>
}

export default Home;