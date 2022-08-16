import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return <div>
        <div class="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">

<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
     {/* <a class="navbar-brand" href="#">Navbar</a>  */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link style={{ color: 'black' }} class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: 'black' }} class="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: 'black' }} class="nav-link" to="/about">About Me</Link>
        </li>
        <li class="nav-item">
          <Link style={{ color: 'black' }} class="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
}



export default Navbar;