import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App(){
  return(
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
    </BrowserRouter>
  )
}

export default App;