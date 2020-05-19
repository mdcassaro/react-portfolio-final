import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
        Michael Cassaro
        </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <a link href="contact.html" alt="contact" className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a link href="portfolio.html" alt="portfolio" className="nav-link" href="#">Portfolio</a>
        </li>
        
        
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
