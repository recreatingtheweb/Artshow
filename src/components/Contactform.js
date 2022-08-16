import React from "react";
import Header from "./Header";

function Contactform(){

    // <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <textarea name="message"></textarea>
    // </form>

    return <div>

<Header title="Contact Me"   /> 
<form>

    <div class="form-floating">
      <input type="text" class="form-control "  placeholder="name@example.com"/>
      <label for="floatingInput">Your name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control"  placeholder="Email Adress"/>
      <label for="floatingPassword">Email Adress</label>
    </div>
    <div class="form-floating">
      {/* <input type="text" class="form-control" id="floatingPassword" placeholder="Message"/> */}
      <textarea  style = {{  height : 200 }} type="text" class="form-control"  placeholder="name@example.com"></textarea>

      <label for="floatingPassword">Message</label>
    </div>

    <div class="submit-position">
    <button class="w-100 btn btn-lg btn-secondary fw-bold border-white bg-dark" type="submit">Submit</button>
    </div>
  </form>



    </div>
    
}

export default Contactform;