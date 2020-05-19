import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function App(){
  return(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Contact} />
          <Route exact path="/search" component={Portfolio} />
        </Wrapper>
      </div>
    </BrowserRouter>
  )
}

export default App;