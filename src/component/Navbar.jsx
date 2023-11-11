import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img  id="pic" src="https://media.wired.com/photos/6414bc988a80ebacb760001c/master/pass/Best-SMS-Apps-for-Android-Gear-GettyImages-1329185604.jpg"></img>
      <h1>COME ON...! just tell us....</h1>
      <ul >
        <li>
          <Link id="a" to="/">Home</Link>
          <Link  id="b" to="/add">Add Confession</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;