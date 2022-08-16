import React from "react";

function Header(props){
    return <div>
           <div className="header">
           <h1 >{props.title}</h1>
                
                <p >
                {props.text}
                </p>
                
         </div>
         </div>
}

export default Header;
