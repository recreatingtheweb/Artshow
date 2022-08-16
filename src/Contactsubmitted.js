import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Link } from "react-router-dom";
function Contactsubmitted(){

    return <div>
    <Navbar/>
    <Header title="Thank you for submission!"/>
    <div id="send-button" class="text-center text-md-left">
        <button  class="btn btn-primary" ><Link to="/">Return Home</Link></button>
     </div>

    </div>
}

export default Contactsubmitted;