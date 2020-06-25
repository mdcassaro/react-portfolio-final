import React from "react";
import myPic from './picture of me.jpg'
import "../styles/bootstrap.min.css"
import "../styles/About.css";




function About(props){
    return(
        <div className="container" >
                <div className="row">
                
                    <div className="card mt-2-primary">
                    
                    
                        <h1>About Me:</h1>
                    
                    <div className="row">
                        <div className="col-md-3 img-container">
                        <img src={myPic} alt={props.name} className="img-thumbnail"/>
                        </div>
                        <div className="col-md-9">
                        <p>
                            I am from Louisville, Ky. I majored in Biology from the University of Louisville. I obtained my MBA from Bellarmine University in Louisville, Ky. I received a full stack web development certification from the University of Texas in Austin. This program included HTML, CSS, Javascript, jQuery, SQL, MongoDB, Express, and React. Over the course of this learning experience I was responsible for the creation of numerous applications using these languages.
                        </p>
                        <div className="row">
                        <div class="col align-self-center">
                        <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aacae761d-9ce9-4c7a-8419-066358db3834"  target="noopener noreferer" class="btn btn-primary">Click to view my Resume</a>
                        </div>
                        </div>
                        
                        
                        
                        
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
      )
    }

    export default About;