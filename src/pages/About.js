import React from "react";
import "../styles/About.css";


function About(props){
    return(
        <div className="container" >
                <div className="row">
                <div className="col-md-10">
                    <div className="card mt-2">
                    <div className="page-header">
                    
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 img-container">
                        <img src="https://avatars3.githubusercontent.com/u/60193809?s=400&u=d80ade1797a18813d4d312528780f5b503b65f13&v=4" alt={props.name} className="img-thumbnail"/>
                        </div>
                        <div className="col-md-9">
                        <p>
                            I am from Louisville, Ky. I majored in Biology from the University of Louisville. I obtained my MBA from Bellarmine University in Louisville, Ky. Prior to this program I have never coded or taken any action to code. This course was the first time I garnered an understanding of the behind the seen processes that go into making a website.
                        </p>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
      )
    }

    export default About;