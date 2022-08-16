import React from "react";
import { Link } from "react-router-dom";

function Aboutsection(){
    return <div>
    
        <div class="row featurette ">
                <div  class="col-md-7 homepage-text">
                    <div className="About-section">   
                            <h1 class="featurette-heading">About Me </h1>
                            <p id="about" >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            <Link to="/contact" class="btn btn-lg btn-secondary fw-bold border-white bg-dark">Contact Me</Link>
                    </div>
                </div>
                {/* <div class="col-md-5">
                    <img style={{ margin: '15px' }}  class="gallery-item" src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4="  alt="gallery"/>

                </div> */}
            </div>        
    </div>
}

export default Aboutsection;