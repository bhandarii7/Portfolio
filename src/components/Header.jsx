import React from "react";
import "../styles/header.css";
import { Route, Routes, Link } from "react-router-dom";
import resume from '../assets/Yash_Resume.pdf'

function Header() {
  return (
    <nav className="Header">
      <h1>Yash Bhandari</h1>
      <div className="btns">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"about"}>
          <button>About</button>
        </Link>
        <Link to={"/projects"}>
          <button>Projects</button>
        </Link>
        <a download='Resume' href={resume}>
        <button  className="resume" >Resume</button>
        </a>
      </div>
    </nav>
  );
}

export default Header;
