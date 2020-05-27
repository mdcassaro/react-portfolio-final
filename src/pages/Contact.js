import React from "react";
import "../styles/Contact.css";



function Contact(){
    return(
        <div class="container">
        <div class="row" >
            <div class="col-md-10">
                <form>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">My Linkedin Profile: </label>
                      <a href="https://www.linkedin.com/in/michael-cassaro-5580161a6/" target="_blank" rel= "noopener noreferrer"class="btn btn-primary">Visit my Linkedin</a>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email Me:</label>
                        <a href="mailto:myemail@gmail.com" target="_blank" rel= "noopener noreferrer"  class="btn btn-primary">Click to Email Me</a>
                    </div>
                    
                </form>

            </div>
        </div>
      </div>
      )
    }

    export default Contact;