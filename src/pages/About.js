import React from "react";


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
                        <img src="picture of me.PNG" alt={props.name} className="img-thumbnail"/>
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