import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


function Header() {
  const headerstyle = {
    color:"white",
    fontSize:"25px"
   
  }
  return (
    <div className="container bg-dark" >
 <nav className="navbar navbar-expand-lg navbar-dark" style={headerstyle}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/"><h4 >My ToDo</h4><i className="text-muted">ToDo list is my to be list!!!</i> <span className="sr-only">(current)</span></Link>
      </li>
     
      </ul>
  </div>
</nav>
    </div>
  );
}

export default Header;