import React, { Component,useState } from "react";
import navbarimg from "../img/desktop-computer-new-computers.gif";
import { Link } from "react-router-dom";

const Navbar =()=>{

    const [Navbar,SetNavbar]=useState(false);
    function toggleClass(){
      SetNavbar(!Navbar);
    }
    return (
      <div className="navbardiv">
        <header>
          <div className="ikonsdiv" onClick={toggleClass}>
            <i className="fas fa-bars opennav" />
          </div>
        </header>
        <div className={`navbardiv1 ${Navbar ? "activeNavbar" : "navbardiv1"}`}>
        <div className="navbar">
          <h1 className="clousenav" onClick={toggleClass} >X</h1>
          <img src={navbarimg} alt="" />
          <div className="navitemdiv">
            <ul>
              <li >
                <Link to="/MyPortfolio" className="linkitem" onClick={toggleClass}>
                  <div className="text text1">Home</div>
                  <div className="text text2">Home</div>
                  <div className="text text3">Home</div>
                  <div className="text text4">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/about" className="linkitem linkhover" onClick={toggleClass}>
                  <div className="text textA text1">About Me</div>
                  <div className="text textA text2">About Me</div>
                  <div className="text textA text3">About Me</div>
                  <div className="text textA text4">About Me</div>
                </Link>
              </li>
              <li>
                <Link to="/skills" className="linkitem linkhover" onClick={toggleClass}>
                  <div className="text textS text1">Skills</div>
                  <div className="text textS text2">Skills</div>
                  <div className="text textS text3">Skills</div>
                  <div className="text textS text4">Skills</div>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="linkitem linkhover" onClick={toggleClass}>
                  <div className="text textC text1">Contact</div>
                  <div className="text textC text2">Contact</div>
                  <div className="text textC text3">Contact</div>
                  <div className="text textC text4">Contact</div>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="linkitem linkhover" onClick={toggleClass}>
                  <div className="text textP text1">Portfolio</div>
                  <div className="text textP text2">Portfolio</div>
                  <div className="text textP text3">Portfolio</div>
                  <div className="text textP text4">Portfolio</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }


export default Navbar;
