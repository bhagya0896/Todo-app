import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  const footerstyle = {
    color:"white",
    width:"100%"
  }
  return (
    <div className="container">
      <p className="text-center bg-dark p-2 " style = {footerstyle}> @mytodoApp.inc </p>
    </div>
  );
}

export default Footer;